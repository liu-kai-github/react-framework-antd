import React from 'react';
// import {Switch, Route} from 'react-router-dom';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';

import {DashboardRouter} from 'src/routes';

import './index.css';

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,  // 当前收起状态
        };

        this.onCollapse = this.onCollapse.bind(this);
        this.onMenuClick = this.onMenuClick.bind(this);
        // this.onMenuOpenChange = this.onMenuOpenChange.bind(this);
    }

    /**
     * @description 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发
     */
    onCollapse(collapsed) {
        console.log(collapsed);
        this.setState({collapsed});
    }

    /**
     * @description 点击 MenuItem 调用此函数
     */
    onMenuClick(item, key, keyPath) {
        console.log(item, key, keyPath, 'IKK');
    }

    /**
     * @description SubMenu 展开/关闭的回调
     */
    // onMenuOpenChange(openKeys) {
    //     console.log(openKeys, 'OOO');
    // }

    render() {
        // console.log(this.props, 'TPM');
        const splitPathname = this.props.location.pathname.replace('/', '').split('/');
        const selectedKeys = [splitPathname[1]];
        let openKeys = [];
        switch (selectedKeys[0]) {
            case 'tom':
            case 'bill':
            case 'alex':
                openKeys = ['user'];
                break;
            case 'team1':
            case 'team2':
                openKeys = ['team'];
                break;
        }
        // console.log(openKeys, 'openKeys');
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >

                    <div className="logo"/>

                    <Menu
                        defaultOpenKeys={openKeys}
                        selectedKeys={selectedKeys}
                        onClick={this.onMenuClick}
                        onOpenChange={this.onMenuOpenChange}
                        theme="dark"
                        mode="inline"
                    >
                        <Menu.Item key="option1">
                            <Icon type="pie-chart"/>
                            <span>Option 1</span>
                        </Menu.Item>

                        <Menu.Item key="option2">
                            <Icon type="desktop"/>
                            <span>Option 2</span>
                        </Menu.Item>

                        <SubMenu
                            key="user"
                            title={<span><Icon type="user"/><span>User</span></span>}
                        >
                            <Menu.Item key="tom">Tom</Menu.Item>
                            <Menu.Item key="bill">Bill</Menu.Item>
                            <Menu.Item key="alex">Alex</Menu.Item>
                        </SubMenu>

                        <SubMenu
                            key="team"
                            title={<span><Icon type="team"/><span>Team</span></span>}
                        >
                            <Menu.Item key="team1">Team 1</Menu.Item>
                            <Menu.Item key="team2">Team 2</Menu.Item>
                        </SubMenu>

                        <Menu.Item key="file">
                            <Icon type="file"/>
                            <span>File</span>
                        </Menu.Item>
                    </Menu>

                </Sider>

                <Layout>

                    <Header style={{background: '#fff', padding: 0}}/>

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

                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>

                </Layout>
            </Layout>
        );
    }
}

export default Dashboard;
