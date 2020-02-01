import React, { Component } from 'react';
import Header from './components/header'
import Home from './pages/home'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import ManageAdmin from './pages/manageadmin'
import ManageStudio from './pages/managestudio'
import Login from './pages/login'
import Register from './pages/register'
import Moviedetail from './pages/movie-detail'
import Belitiket from './pages/belitiket'
import Cart from './pages/cart'
import History from './pages/history'
import {connect} from 'react-redux'
import {LoginSuccessAction} from './redux/actions'
import Axios from 'axios';
import { APIURL,apiRealUrl } from './support/ApiUrl';
import Verified from './pages/verified';
import waitingverified from './pages/waitingverified';


class App extends Component{
  state={
    loading:true
  }

  componentDidMount(){
    var id=localStorage.getItem('dino')
    console.log(id)
    if(id){
      Axios.get(`${apiRealUrl}user/authlog/${id}`)
      .then((res)=>{
        localStorage.setItem('token',res.data.token)
        this.props.LoginSuccessAction(res.data.result)
      }).catch((err)=>{
        console.log(err)
      })
      .finally(()=>{
        this.setState({loading:false})
      })
    }else{
      this.setState({loading:false})
    }

  }


  render(){
    if(this.state.loading){
      return <div>loading</div>
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path={'/'} exact>
            <Home/>
          </Route>
          <Route path={'/manageadmin'} exact >
            <ManageAdmin/>
          </Route>          
          <Route path='/moviedetail/:id' component={Moviedetail} exact />
          <Route path='/belitiket' component={Belitiket} exact/>
          <Route path='/cart' component={Cart} exact/>
          <Route path='/managestudio' component={ManageStudio} exact/>
          <Route path='/history' component={History} exact/>
          <Route path={'/login'} exact component={Login}/>
          <Route path={'/register'} exact component={Register}/>
          <Route path={'/verified'} exact component={Verified} />
          <Route path={'/waitingverified'} exact component={waitingverified} />
        </Switch>
      </div>
    );
  }
}

const MapstateToprops=(state)=>{
  return{
      AuthLog:state.Auth.login
  }
}

export default connect(MapstateToprops,{LoginSuccessAction})(App);
