import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';


const RouterComponent = () => {
	return (
		<Router sceneStyle={styles.sceneStyle} >
			<Scene key="login" component={LoginForm} title="Please Login" />
			<Scene key="employeeList" component={EmployeeList} title="Employees" />
		</Router>
	);
};

const styles = StyleSheet.create({
	sceneStyle: {
		paddingTop: (Platform.OS === 'ios') ? 65 : 55
	}
});
export default RouterComponent;
