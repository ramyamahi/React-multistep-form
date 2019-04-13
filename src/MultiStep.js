import React, { Component } from 'react';
import DetailsForm from './DetailsForm';
import DetailsList from './DetailsList';
import Success from './Success';

class MultiStep extends Component {
  state = {
    step: 1,
    firstName: '',
    phone: '',
    email: ''    
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({ step : step + 1 })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({ step : step - 1 })
  }

  handleChange = input => event => {
    this.setState({ [input] : event.target.value })
  }

  render(){
    const {step} = this.state;
    const { firstName, phone, email } = this.state;
    const values = { firstName, phone, email };
    switch(step) {
    case 1:
        return <DetailsForm 
                nextStep={this.nextStep} 
                handleChange = {this.handleChange}
                values={values}
                />
    case 2:
        return <DetailsList 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values={values}
                />
    case 3:
        return <Success />
    }
  }
}

export default MultiStep;