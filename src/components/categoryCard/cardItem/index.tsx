import React from 'react';
import { Card, Avatar } from 'antd';
import { IcardInfo } from '../../../stores/navigate';
import styles from './index.module.less';

const { Meta } = Card;

interface Iprops {
	cardInfo: IcardInfo;
}
export default class CardItem extends React.Component<Iprops> {
	handleClick = (href: string) => {
		window.open(href);
	};
	render() {
		const { cardInfo: { cardIcon, cardTitle, cardDescription, cardHref } } = this.props;
		return (
			<Card className={styles.cardItem} hoverable onClick={(e) => this.handleClick(cardHref)}>
				<Meta
					avatar={<Avatar src={`/img/${cardIcon}`} />}
					title={cardTitle}
					description={cardDescription}
					className={styles.meta}
				/>
			</Card>
		);
	}
}
