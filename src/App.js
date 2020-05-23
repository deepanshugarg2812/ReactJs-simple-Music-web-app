import React from 'react';
import './App.css';
import AddItem from './components/AddItem';

class App extends React.Component{
  render(){
    return(
      <>
      <div className="mainFrame">
        <AddItem />
      </div>
      </>
    );
  }  
}


export default App;