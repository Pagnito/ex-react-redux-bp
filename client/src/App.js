import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store';
import Home from './components/Home/Home';

import './App.scss';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};
	}

	render() {
		return (
			<Provider store={Store}>

				<Route exact path="/" component={Home} />
			</Provider>
		);
	}
}

export default withRouter(App);
