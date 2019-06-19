import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import styles from './index.module.less';
const { Meta } = Card;

export default class CardItem extends React.Component {
    render() {
        return (
            <Card
                className ={styles.cardItem}
                hoverable
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                    className = {styles.meta}
                />
            </Card>
        )
    }
}