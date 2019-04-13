import React, { Component } from 'react';
import { Grid, Menu, Button,  Form, Input, Header, Modal, Divider, Table} from 'semantic-ui-react'
//import { throws } from 'assert';

class DetailsList extends Component{
  saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }


    render(){
        const { values } = this.props
        console.log("Values******************8")
        console.log(values)
        return(
            <div>
                <h3>Name: {values.firstName}</h3>
                <h3>Phone: {values.phone}</h3>
                <h3>Email: {values.email}</h3>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Confirm</Button><br/>
            </div>
        )
    }
}

export default DetailsList;