import React, { Component } from 'react';
import '../../styles/Register.css';

export default class Register extends Component {

  constructor(props) {
    super(props);
  }

  register = () => {
    alert("@TODO Registering");
  }

  toggleRegister = () => {
    this.props.toggleRegister();
  }

  render() {
    return (
      <div className="register-container">
        <div className="register-header" align="center">
          Register
        </div>
        <div className="register-body">
          <div align="center">
            <input id="register_fname" type="text" placeholder="First Name"></input>
          </div>
          <br/>
          <div align="center">
            <input id="register_lname" type="text" placeholder="Last Name"></input>
          </div>
          <br/>
          <div align="center">
            <input id="register_email" type="text" placeholder="email@sms.ed.ac.uk" size="20"></input>
          </div>
          <br/>
          <div align="center">
            <input id="register_pword" type="password" placeholder="password"></input>
          </div>
          <br/>
          <div align="center">
            <div onClick={this.register} className="register-button">register</div>
          </div>
        </div>
        <a onClick={this.toggleRegister} className="login-link">login</a>
      </div>
    );
  }
}