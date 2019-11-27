import React, {Component} from 'react';
import './App.css';
import Header from './components/header'
import Jumbotron1 from './components/jumbotron1';


class App extends Component {
  state = {  }
  
  render() { 
    return (
      <div className='section1'> 
        <Header />
        <Jumbotron1/>
      </div>
    );
  }
}
 
export default App;
