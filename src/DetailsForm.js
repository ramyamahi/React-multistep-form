import React, { Component } from 'react';
import { Grid, Menu, Button,  Form, Input, Header, Modal, Divider, Table} from 'semantic-ui-react'

class DetailsForm extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    render(){
        const { values } = this.props;
        console.log("**************************")
        console.log(this.props.values)
        return(
            <Form>
                <h1 className="ui centered step-style">Enter User Details</h1>
                <Form.Group inline>
                    <Form.Field width={6}>
                        <label>Name</label>
                        <input
                        placeholder='First Name'
                        onChange={this.props.handleChange('firstName')}
                        defaultValue={values.firstName}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group inline>
                    <Form.Field width={6}>
                        <label>Phone</label>
                        <input
                        placeholder='Phone'
                        onChange={this.props.handleChange('phone')}
                        defaultValue={values.phone}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group inline>
                    <Form.Field width={6}>
                        <label>Email</label>
                        <input
                        type='email'
                        placeholder='Email'
                        onChange={this.props.handleChange('email')}
                        defaultValue={values.email}
                        />
                    </Form.Field>
                </Form.Group>
                <Button onClick={this.saveAndContinue}>Next</Button>
            </Form>
        )
    }
}

export default DetailsForm;