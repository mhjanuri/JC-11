import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Homepage from './pages/Homepage'
import About from './pages/about'
import Error404 from './pages/error404'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  state = {  }
  
  render() { 
    return (
      <section className='section1'> 
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' component={About} />
          <Route path='/*' component={Error404} />
        </Switch>
      </section>
    );
  }
}
 
export default App;
