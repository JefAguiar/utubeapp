import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Login from './components/Login';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';
import config from './config.json';
import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config.firebaseConfig);
}
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
         <Router>
            <div>
                <Route path="/" component={Login} />
                <Route path="/auth" component={LoginForm} />
                <Route path="/home" component={Home} />
            </div>
        </Router>
      </Provider>
    );  
  }
}

export default App;
