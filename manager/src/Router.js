import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';


const RouterComponent = () => {
	return (
		<Router sceneStyle={styles.sceneStyle} >
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Please Login" />
			</Scene>
			<Scene key="main">
				<Scene 
					key="employeeList" 
					onRight={() => Actions.employeeCreate()}
					rightTitle="Add" 
					component={EmployeeList} 
					title="Employees" 
					initial
				/>
				<Scene 
					key="employeeCreate"
					component={EmployeeCreate}
					title="Create Employee"
				/>
			</Scene>
		</Router>
	);
};

const styles = StyleSheet.create({
	sceneStyle: {
		paddingTop: (Platform.OS === 'ios') ? 65 : 55
	}
});
export default RouterComponent;
