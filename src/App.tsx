import React from 'react';
import HomeLayout from './layout/home';
import CardItem from './components/categoryCard/cardItem/index'
const App: React.FC = () => {
  return (
    <HomeLayout><CardItem></CardItem></HomeLayout>
  );
}

export default App;
