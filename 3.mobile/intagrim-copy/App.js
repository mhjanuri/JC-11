import React,{Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/redux/reducers'
import AppInit from './AppInit'

const App = () => {
  console.disableYellowBox=true
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
      <AppInit />
    </Provider>
  );
};



export default App;
