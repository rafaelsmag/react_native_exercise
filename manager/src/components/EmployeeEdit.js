import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showFireModal: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, shift, phone } = this.props;
        this.props.employeeSave({ name, shift, phone, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onFirePress() {
        this.toggleModal();
    }

    toggleModal() {
        this.setState({ showFireModal: !this.state.showFireModal });
    }

    fireEmployee() {
        const { employeeDelete, employee } = this.props;
        employeeDelete(employee);
        this.toggleModal();
    }

    render() {
        const { name } = this.props;
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}> Save changes </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                     </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onFirePress.bind(this)}>
                        Fire Employee
                     </Button>
                    <Confirm onAccept={this.fireEmployee.bind(this)} onDecline={this.toggleModal} visible={this.state.showFireModal}>
                        Are you sure you want to fire {name}?
                    </Confirm>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return {
        name,
        phone,
        shift
    };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);
