import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';
import * as actions from './actions';
import reducer from './reducers';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__(reducer));
console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch(actions.addPost());
store.dispatch(actions.deletePost());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
