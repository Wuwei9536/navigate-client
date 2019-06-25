import React, { Fragment } from 'react';
import { Card, Icon } from 'antd';
import CardItem from './cardItem';
import { IcardData } from '../../stores/home/index';
import styles from './index.module.less';

const IconFont = Icon.createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_1259557_zsmza8iko9.js'
});
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
								<IconFont type={menuIcon} style={{ width: '2em' }} />
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
