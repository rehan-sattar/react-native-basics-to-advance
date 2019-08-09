import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from '../reducers';
import Login from './Login';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAaos5u94EXU2Zm4yFPX0PYnRrB71WnGJM',
      authDomain: 'react-todo-ab01b.firebaseapp.com',
      databaseURL: 'https://react-todo-ab01b.firebaseio.com',
      projectId: 'react-todo-ab01b',
      storageBucket: 'react-todo-ab01b.appspot.com',
      messagingSenderId: '566732213718',
      appId: '1:566732213718:web:658822a9cfc2ad13'
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers, applyMiddleware(reduxThunk))}>
        <Login />
      </Provider>
    );
  }
}

export default App;
