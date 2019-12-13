import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/header'
import Home from './pages/home';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import ManageAdmin from './pages/manageadmin';
import Login from './pages/login';
import Logout from "./pages/logout";
import Register from "./pages/register";
import MovieDetail from './pages/moviedetail'
import BeliTiket from './pages/belitiket';
import {connect} from 'react-redux'
import {LoginSuccessAction} from './redux/actions'
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
		this.setState({ loading: false });
	  })
	  .catch(err => {
		console.log(err);
	  });
  }

  render() {
	if (this.state.loading) {
	  return <div>loading</div>;
	}
	return (
    <div>
      <Header />
      <Switch>
    	<Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/manageadmin"}>
          <ManageAdmin />
        </Route>
        <Route exact path="/moviedetail/:id" component={MovieDetail} />
        <Route exact path="/belitiket" component={BeliTiket} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/logout"} component={Logout} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/cart"} component={Cart} />
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

export default connect(MapStateToProps, {LoginSuccessAction}) (App);
