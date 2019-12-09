import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/header'
import Home from './pages/home';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import ManageAdmin from './pages/manageadmin';
import Login from './pages/login';
import {connect} from 'react-redux'
import {LoginSuccessAction} from './redux/actions'
import Axios from 'axios';
import { APIURL } from './support/ApiUrl';

class App extends Component {
  state={
    
  }

  componentDidMount(){
    var id=localStorage.getItem('dino')
    console.log(id)
    Axios.get(`${APIURL}/users/${id}`)
    .then((res)=>{
      this.props
    })
  }

  render() {
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
          <Route exact path={'/login'} component={Login}>
            <Login/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
