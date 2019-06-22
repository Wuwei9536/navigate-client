import {GraphQLClient} from 'graphql-request';

export const Client = new GraphQLClient('http://localhost:3000/graphql', {
  headers: {
    Authorization: 'Bearer __YOUR_SERVICE_TOKEN__',
  },
})
export const getCardDataQuery = `
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
// const variables = { name: 'Sarah' }
// client.request(query)
//   .then(data => console.log(data))
