import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';
//creating store
//we must passa a reducer for createStore -> which is why look at the reducers file
const store = createStore(rootReducer);
//react interacts with the store using provider from react redux
//surround the app using provider component
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
