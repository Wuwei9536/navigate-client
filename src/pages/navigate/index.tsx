import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import { Client, getCardDataQuery } from '../../service/navigate';
import HomeLayout from '../../layout/home';
import CategoryCard from '../../components/categoryCard';

interface Iprops {
	HomeStore?: any;
}

@inject('HomeStore')
@observer
class Navigate extends React.Component<Iprops> {
	async componentDidMount() {
		const { HomeStore } = this.props;
		await Client.request(getCardDataQuery).then((data) => {
			const { cardDatas } = data;
			HomeStore.init(cardDatas);
		});
	}
	render() {
		const { HomeStore: { cardData } } = this.props;

		return (
			<HomeLayout menuInfo={toJS(cardData)}>
				<CategoryCard cardData={toJS(cardData)} />
			</HomeLayout>
		);
	}
}

export default Navigate;
