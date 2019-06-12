
import React, {Component} from 'react';
import Routers from './src/Routers/Routers'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from './src/Redux/Reducer/Index'
import axios from 'axios'

axios.defaults.baseURL = 'https://reactnativetest-1d8e8.firebaseio.com/'
  
export default  class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer,{},applyMiddleware(reduxThunk))}>
        <Routers/>
      </Provider>
    );
  }
}



