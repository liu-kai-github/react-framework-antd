import React from 'react';
import {Card} from 'antd';

import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';

const {Meta} = Card;

const cards = [
    {
        img: pic1,
        title: 'Europe Street beat',
        description: 'www.instagram.com',
    },
    {
        img: pic2,
        title: 'Europe Street beat',
        description: 'www.instagram.com',
    },
    {
        img: pic3,
        title: 'Europe Street beat',
        description: 'www.instagram.com',
    },
    {
        img: pic4,
        title: 'Europe Street beat',
        description: 'www.instagram.com',
    },
];

function Index() {
    return (<div>
        {
            cards.map(
                (itme, index) => {
                    return (<Card
                        key={index}
                        hoverable
                        // style={{width: 240}}
                        cover={<img
                            alt="example"
                            src={itme.img}
                        />}
                    >
                        <Meta
                            title={itme.title}
                            description={itme.title}
                        />
                    </Card>);
                }
            )
        }
    </div>);
}

export default Index;
