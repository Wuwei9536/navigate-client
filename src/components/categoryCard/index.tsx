import React from 'react';
import { Card } from 'antd';
import CardItem from './cardItem';
import { IcardData } from '../../stores/home/index';
import styles from './index.module.less'

interface Iprops {
    cardData: IcardData[]
}
export default class CategoryCard extends React.Component<Iprops>{
    render() {
        const { cardData } = this.props;
        return (
            <>
                {
                    cardData.map(item => {
                        const { menuName, menuIcon, cardInfo } = item;
                        return (
                            <Card bordered={false} className={styles.categoryCard}>
                                <div className={styles.menuName}>{menuName}</div>
                                <div className={styles.categoryCardBody}>
                                    {cardInfo.map(it => (
                                        <CardItem cardInfo={it}></CardItem>
                                    ))}
                                </div>
                            </Card>
                        )
                    })
                }
            </>
        )
    }
}