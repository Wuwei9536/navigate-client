import { observable, action, autorun } from 'mobx';

export interface IcardInfo {
	cardIcon: string;
	cardTitle: string;
	cardDescription: string;
	cardHref: string;
}

export interface IcardData {
	menuIcon: string;
	menuName: string;
	cardInfo: IcardInfo[];
}

interface IhomeStore {
	cardData: IcardData[];
}

class HomeStore implements IhomeStore {
	@observable
	cardData: IcardData[] = [
		{
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
export default new HomeStore();
