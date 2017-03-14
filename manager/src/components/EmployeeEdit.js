import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button> Save changes </Button>
                </CardSection>
            </Card>
        );
    }
}

export default connect(null, { employeeUpdate })(EmployeeEdit);
