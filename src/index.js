import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter , Route } from 'react-router-dom';


import Login from './container/login/login.js';
import Register from './container/reg/reg.js';
import AuthRoute from './component/authroute/authroute'


import reducers from './reducer';
import './config';


const store = createStore(reducers,compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() :f=>f
))
ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<AuthRoute></AuthRoute>
				<Route path="/login" component={Login}></Route>
				<Route path="/register" component={Register}></Route>
			</div>
			
		</BrowserRouter>
	</Provider>), 
	document.getElementById('root')
);
// registerServiceWorker();
