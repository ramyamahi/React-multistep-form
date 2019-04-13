import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { Header, Modal } from 'semantic-ui-react'
import MultiStep from './MultiStep';


class App extends Component {
  render() {    
    return (    
      <Router>
        <div className="App">  
          <Modal 
            trigger={
              <h3>
                <NavLink to="/MultiStep" activeClassName='is-active'>React MultiStep Form</NavLink>
              </h3>           
            } className='modal-style' closeIcon>
            <MultiStep/>
          </Modal>
          <hr/>          
        </div>
      </Router>
    );
  }
}

export default App;
