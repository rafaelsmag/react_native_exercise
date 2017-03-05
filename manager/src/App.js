import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
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
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<LoginForm />
				</View>
			</Provider>
		);
	}
}

export default App;
