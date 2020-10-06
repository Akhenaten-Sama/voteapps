import React from 'react';
import {  Switch, Route} from 'react-router-dom'
import Main from './components/Main/main'
import Winner from './components/Winner/winner'
import './App.css';

function App() {
  return (
    <div>
  <Switch>
  <Route exact path ='/'  render ={props=> <Main {...props}/>} />
  <Route  path ='/winner'   render ={props=> <Winner {...props}/>} />

  </Switch>
  
    </div>
  );
}

export default App;
