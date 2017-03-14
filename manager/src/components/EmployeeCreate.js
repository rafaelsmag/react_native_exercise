import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text, StyleSheet } from 'react-native'; 
import { Input, CardSection, Card, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	}

	render() {
		return (	
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { phone, name, shift } = state.employeeForm;

	return {
		phone,
		name,
		shift
	};
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
