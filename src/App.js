import React from 'react';
import './App.css';
import LoginComponent from './components/LoginComponent';
import UserComponent from './components/UserComponent';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
      <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginComponent} />
          <Route exact path="/user" component={UserComponent} />
        </Switch>
      </BrowserRouter>
      </>
    );
  }  
}


export default App;