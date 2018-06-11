import React from 'react';
import {Carousel} from 'antd';

import './index.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

function Horizontal() {
    return (<Carousel
        className="horizontal"
        autoplay
    >
        {
            [img1, img2, img3].map(
                (item, index) => {
                    return (<div key={index}>
                        <img src={item}/>
                    </div>);
                }
            )
        }

    </Carousel>);
}

export default Horizontal;
