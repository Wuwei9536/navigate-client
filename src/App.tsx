import React from 'react';
import HomeLayout from './layout/home';
import CategoryCard from './components/categoryCard';
const data = [{
  menuIcon: "1",
  menuName: "a",
  cardInfo: [{
    cardIcon: "a",
    cardTitle: "as",
    cardDescription: "a",
    cardHref: "www.baidu.com"
  },{
    cardIcon: "a",
    cardTitle: "as",
    cardDescription: "a",
    cardHref: "www.baidu.com"
  },{
    cardIcon: "a",
    cardTitle: "as",
    cardDescription: "a",
    cardHref: "www.baidu.com"
  },{
    cardIcon: "a",
    cardTitle: "as",
    cardDescription: "a",
    cardHref: "www.baidu.com"
  },{
    cardIcon: "a",
    cardTitle: "as",
    cardDescription: "a",
    cardHref: "www.baidu.com"
  },{
    cardIcon: "a",
    cardTitle: "as",
    cardDescription: "a",
    cardHref: "www.baidu.com"
  },{
    cardIcon: "a",
    cardTitle: "as",
    cardDescription: "a",
    cardHref: "www.baidu.com"
  },{
    cardIcon: "a",
    cardTitle: "as",
    cardDescription: "a",
    cardHref: "www.baidu.com"
  },{
    cardIcon: "a",
    cardTitle: "as",
    cardDescription: "a",
    cardHref: "www.baidu.com"
  }]
},
{
  menuIcon: "1",
  menuName: "a",
  cardInfo: [{
    cardIcon: "a",
    cardTitle: "as",
    cardDescription: "a",
    cardHref: "www.baidu.com"
  }]
},
]
const App: React.FC = () => {
  return (
    <HomeLayout><CategoryCard cardData={data}></CategoryCard></HomeLayout>
  );
}

export default App;
