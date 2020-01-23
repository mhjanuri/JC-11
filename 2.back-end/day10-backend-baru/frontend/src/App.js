import React, { Fragment, useEffect, useState, useRef } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Header from './components/header'
import ManageUsers from './pages/manageusers'

function App() {
  return (
    <Fragment>
      <Header/>
      <Switch>
        <Route path='/' exact component={ManageUsers} />
      </Switch>
    </Fragment>
  )
}

export default App