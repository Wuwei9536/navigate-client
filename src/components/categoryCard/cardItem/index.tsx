import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import { IcardInfo } from '../../../stores/home/index';
import styles from './index.module.less';
const { Meta } = Card;

interface Iprops {
    cardInfo: IcardInfo
}
export default class CardItem extends React.Component<Iprops> {
    render() {
        const { cardInfo: { cardIcon, cardTitle, cardDescription,cardHref } } = this.props;
        return (
            <Card
                className={styles.cardItem}
                hoverable
            >
                <Meta
                    avatar={<Avatar src={cardIcon} />}
                    title={cardTitle}
                    description={cardDescription}
                    className={styles.meta}
                />
            </Card>
        )
    }
}