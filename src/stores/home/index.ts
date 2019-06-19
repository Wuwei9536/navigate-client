import { observable, action, autorun } from 'mobx';

interface ImenuData {
    menuIcon:string
    menuName:string
}

export interface IcardInfo{
    cardIcon:string
    cardTitle:string
    cardDescription:string
    cardHref:string
}

export interface IcardData{
    menuIcon:string
    menuName:string
    cardInfo:IcardInfo[]
}

interface IhomeStore {
    menuData:ImenuData[]
    cardData:IcardData[]
}

class HomeStore implements IhomeStore{
    @observable menuData = []

    @observable cardData = []
}

export default new HomeStore()