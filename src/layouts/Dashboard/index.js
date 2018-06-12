import React from 'react';
// import {Switch, Route} from 'react-router-dom';
import {Layout, Breadcrumb} from 'antd';

import {DashboardRouter} from 'src/routes';

import './index.css';
import AppMenu from "src/views/AppMenu";

const {Header, Content, Footer, Sider} = Layout;


class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,  // 当前收起状态
        };

        this.onCollapse = this.onCollapse.bind(this);

    }

    /**
     * @description 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发
     */
    onCollapse(collapsed) {
        console.log(collapsed);
        this.setState({collapsed});
    }


    render() {
        // console.log(this.props, 'TPM');

        // console.log(openKeys, 'openKeys');
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >

                    <div className="logo"/>

                    {/* 导航菜单 */}
                    <AppMenu {...this.props} />

                </Sider>

                <Layout>

                    {/* 页头 */}
                    <Header style={{background: '#fff', padding: 0}}/>

                    {/* 内容主体 */}
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            {/*Bill is a cat.、*/}
                            <DashboardRouter {...this.props} />
                        </div>
                    </Content>

                    {/* 页脚 */}
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>

                </Layout>
            </Layout>
        );
    }
}

export default Dashboard;
