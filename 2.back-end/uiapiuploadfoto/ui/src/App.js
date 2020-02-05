import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Transaksi from './pages/transaksi'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/transaksi' component={Transaksi} />
      </Switch>
    </div>
  );
}

export default App;
