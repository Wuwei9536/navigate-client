import React from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import { Client, getCardData } from '../../service/navigate';
import NavigateLayout from '../../layout/navigate';
import CategoryCard from '../../components/categoryCard';

interface Iprops {
	NavigateStore?: any;
}

@inject('NavigateStore')
@observer
class Navigate extends React.Component<Iprops> {
	async componentDidMount() {
		const { NavigateStore } = this.props;
		await Client.request(getCardData).then((data) => {
			const { cardDatas } = data;
			NavigateStore.init(cardDatas);
		});
	}
	render() {
		const { NavigateStore: { cardData } } = this.props;

		return (
			<NavigateLayout menuInfo={toJS(cardData)}>
				<CategoryCard cardData={toJS(cardData)} />
			</NavigateLayout>
		);
	}
}

export default Navigate;
