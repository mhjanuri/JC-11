import React, {Component} from 'react';
import Header from './components/Header';
import Home from './pages/Homepage'
import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Header/>
        <Home>
          
        </Home>
      </div>
    );
  }
}
 
export default App;
