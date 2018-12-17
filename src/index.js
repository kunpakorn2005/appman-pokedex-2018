import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { fetchAllPokemons } from './action';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllPokemons());

const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<MyApp />, document.getElementById('root'));

