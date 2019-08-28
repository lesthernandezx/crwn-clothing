import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import HeaderComponent from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <Switch>
        <Route exact={true} path='/' component= {HomePage}/>
        <Route exact={true} path='/shop' component= {ShopPage}/>
        <Route exact={true} path='/signin' component= {SignInAndSignUpPage}/>
      </Switch>
    </div>
    // <HomePage></HomePage>
  );
    
  
}

export default App;
 