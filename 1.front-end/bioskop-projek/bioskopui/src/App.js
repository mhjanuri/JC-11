import React from 'react';
// import logo from './logo.svg';
import Header from './components/header'
import Home from './pages/home';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import ManageAdmin from './pages/manageadmin';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path={'/'}>
          <Home/>
        </Route>
        <Route exact path={'/manageadmin'}>
          <ManageAdmin/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
