import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/header'
import Home from './pages/home';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import ManageAdmin from './pages/manageadmin';
import ManageStudio from './pages/managestudio'
import Login from './pages/login';
import Register from "./pages/register";
import MovieDetail from './pages/moviedetail'
import BeliTiket from './pages/belitiket';
import Cart from './pages/cart';
import History from './pages/history'
import Pagenotfound from './pages/pagenotfound'
import UserSetting from './pages/usersetting'
import {connect} from 'react-redux'
import {LoginSuccessAction,countCart} from './redux/actions'
import Axios from 'axios';
import { APIURL } from './support/ApiUrl';

class App extends Component {
  state = {
	  loading: false
  };

  componentDidMount() {
	var id = localStorage.getItem("dino");
	Axios.get(`${APIURL}/users/${id}`)
	  .then(res => {
		this.props.LoginSuccessAction(res.data);
    this.setState({ loading: true });
      Axios.get(`${APIURL}/orders?userId=${id}`)
      .then(res1=>{
        this.props.countCart(res1.data.length)
        console.log(res1.data.length);
      }).catch(err1 => {
        console.log(err1);
      })
	  })
	  .catch(err => {
		  console.log(err);
	  }).finally(()=>{
      this.setState({loading:false})
    })
  }

  render() {
	if (this.state.loading) {
	  return <div>Loading... Please Wait...</div>;
	}
	return (
    <div>
      <Header />
      <Switch>
        <Route exact path={"/"}> <Home /> </Route>
        <Route exact path={"/manageadmin"}> <ManageAdmin /> </Route>
        <Route exact path="/managestudio" component={ManageStudio} />
        <Route exact path="/moviedetail/:id" component={MovieDetail} />
        <Route exact path="/belitiket" component={BeliTiket} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/cart"} component={Cart} />
        <Route exact path='/history' component={History} />
        <Route exact path='/settings' component={UserSetting} />
        <Route exact path='/pagenotfound' component={Pagenotfound} />

        <Route path='/*' component={Pagenotfound} />
      </Switch>
    </div>
  );
  }
}

const MapStateToProps=(state)=>{
  return{
	AuthLog:state.Auth.login
  }
}

export default connect(MapStateToProps, {LoginSuccessAction,countCart}) (App);
