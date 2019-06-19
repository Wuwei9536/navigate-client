import { observable, action, autorun } from 'mobx';

interface ImenuData {
    menuIcon:string
    menuName:string
}

interface IcardInfo{
    cardIcon:string
    cardTitle:string
    cardHref:string
}

interface IcardData{
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