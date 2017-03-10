import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text, StyleSheet } from 'react-native'; 
import { Input, CardSection, Card, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {

	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	}

	render() {
		return (
			<Card>
				<CardSection>
				<Input
					label="Name"
					placeholder="João"
					value={this.props.name}
					onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
				/>
				</CardSection>

				<CardSection>
					<Input
						label="Phone"
						placeholder="(99) 99999-9999"
						value={this.props.phone}
						onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
					/>
				</CardSection>

				<CardSection style={{ alignItems: 'center' }}>
					<Text style={styles.pickerLabelStyle}>Shift</Text>
					<Picker
						style={{ flex: 3 }}
						selectedValue={this.props.shift}
						onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
					>
						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Tuesday" value="Tuesday" />
						<Picker.Item label="Wednesday" value="Wednesday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Saturday" />
						<Picker.Item label="Sunday" value="Sunday" />
					</Picker>
				</CardSection>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	pickerLabelStyle: {
		fontSize: 16,
		paddingLeft: 20,
		flex: 1
	}
});

const mapStateToProps = (state) => {
	const { phone, name, shift } = state.employeeForm;

	return {
		phone,
		name,
		shift
	};
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
