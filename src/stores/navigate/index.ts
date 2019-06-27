import { observable, action } from 'mobx';

export interface IcardInfo {
	id:string;
	cardIcon: string;
	cardTitle: string;
	cardDescription: string;
	cardHref: string;
}

export interface IcardData {
	id: string;
	menuIcon: string;
	menuName: string;
	cardInfo: IcardInfo[];
}

interface InavigateStore {
	cardData: IcardData[];
}

class NavigateStore implements InavigateStore {
	@observable
	cardData: IcardData[] = [
		{
			id:'1',
			menuIcon: '',
			menuName: '',
			cardInfo: []
		}
	];

	@action
	init = (data: IcardData[]) => {
		this.cardData = data;
	};
}
export default new NavigateStore();
