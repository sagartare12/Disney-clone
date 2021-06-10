import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {    Switch , Route} from 'react-router-dom'
import Detail from './components/Detail';
import LogIn from './components/LogIn';
function App() {
  return (
    <div className="App">
     
        <Header />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route   path="/detail/:id" >
            <Detail />
          </Route>
          <Route   path="/login" >
            <LogIn />
          </Route>
          <Route>
          Error 404 page not found
        </Route>
        </Switch>
      
      
    </div>
  );
}

export default App;
