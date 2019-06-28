import React, { Fragment } from 'react';
import { Card } from 'antd';
import CardItem from './cardItem';
import { IcardData } from '../../stores/navigate';
import styles from './index.module.less';

interface Iprops {
	cardData: IcardData[];
}
export default class CategoryCard extends React.Component<Iprops> {
	render() {
		const { cardData } = this.props;
		return (
			<Fragment>
				{cardData.map((item) => {
					const { menuName, menuIcon, cardInfo, id } = item;
					return (
						<Card bordered={false} className={styles.categoryCard} key={id}>
							<div id={menuName} className={styles.menuName}>
								<img src={`/img/${menuIcon}`} className={styles.menuImg} alt={`${menuIcon}`}/>
								{menuName}
							</div>
							<div className={styles.categoryCardBody}>
								{cardInfo.map((it) => <CardItem cardInfo={it} key={it.id} />)}
							</div>
						</Card>
					);
				})}
			</Fragment>
		);
	}
}
