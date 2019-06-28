import {GraphQLClient} from 'graphql-request';

export const Client = new GraphQLClient('/graphql', {
  headers: {
    Authorization: 'Bearer __YOUR_SERVICE_TOKEN__',
  },
})
// 获取类目卡片信息
export const getCardData = `
    query{
    cardDatas{
        id
        menuIcon:menu_icon
        menuName:menu_name
        cardInfo:card_info{
        id
        cardIcon:card_icon
        cardHref:card_href
        cardTitle:card_title
        cardDescription:card_description
        }
      }
    }
`
export const createMenu = `
    mutation($menu_name:String!,$menu_icon:String!){
      createMenu(data: {
        menu_icon: $menu_icon,
        menu_name: $menu_name,
      }){
        id
        menu_icon
        menu_name
      }
    }
`

export const createCard = `
    mutation($card_icon:String!,$card_href:String!,$card_title:String!,$card_description:String!,$menu_name:String!){
      createCard(data: {
        card_icon:$card_icon,
        card_href:$card_href,
        card_title:$card_title,
        card_description:$card_description,
        menu:{
          connect:{
            menu_name:$menu_name
          }
        }
      }){
        id
        card_icon
        card_title
        card_description
        card_href
      }
    }
`

export const deleteCard = `
    mutation($card_title:String!){
      deleteCard(where: {
      card_title:$card_title
      }){
        id
        card_icon
        card_title
        card_description
        card_href
        createdAt
        updatedAt
      }
    }
`
// const variables = { name: 'Sarah' }
// client.request(query,variables)
//   .then(data => console.log(data))
