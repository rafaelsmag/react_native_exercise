import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyA13yhADSY7VQE9dpxD1NWlvvElZBtApgI',
			authDomain: 'manager-rn.firebaseapp.com',
			databaseURL: 'https://manager-rn.firebaseio.com',
			storageBucket: 'manager-rn.appspot.com',
			messagingSenderId: '233941293934'
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware (ReduxThunk));
		return (
			<Provider store={store}>
					<LoginForm />
			</Provider>
		);
	}
}

export default App;
