import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>

);

const TopicsPage = () => (
  <div>
    <h1>TOPICS</h1>
  </div>

);

const TopicsDetailPage = () => (
  <div>
    <h1>TOPICS DETAIL</h1>
  </div>

);

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component= {HomePage}/>
        <Route exact={true} path='/hats' component= {HatsPage}/>
        <Route exact={true} path='/shop' component= {ShopPage}/>
      </Switch>
    </div>
    // <HomePage></HomePage>
  );
    
  
}

export default App;
 