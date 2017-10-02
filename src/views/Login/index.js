import React, { Component } from 'react';
import '../../styles/Login.css';

export default class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-header" align="center">
          Login
        </div>
        <div className="login-body">
          <div align="center">
            <input id="login_email" type="text" placeholder="email@sms.ed.ac.uk" size="20"></input>
          </div>
          <br/>
          <div align="center">
            <input id="login_pword" type="password" placeholder="password"></input>
          </div>
          <br/>
          <div align="center">
            <div className="login-button">login</div>
          </div>
        </div>
        <a className="register-link">register</a>
      </div>
    );
  }
}