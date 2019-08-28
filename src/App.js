import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import HeaderComponent from './components/header/header.component.jsx';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <Switch>
        <Route exact={true} path='/' component= {HomePage}/>
        <Route exact={true} path='/shop' component= {ShopPage}/>
      </Switch>
    </div>
    // <HomePage></HomePage>
  );
    
  
}

export default App;
 