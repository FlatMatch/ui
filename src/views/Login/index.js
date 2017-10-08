import React, { Component } from 'react';
import '../../styles/Login.css';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  login = () => {
    this.props.login(this.state.email, this.state.password);
  }

  toggleRegister = () => {
    this.props.toggleRegister();
  }

  updateEmail = (event) => {
    this.setState({email: event.target.value});
  }

  updatePassword = (event) => {
    this.setState({password: event.target.value});
  }

  handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      if (this.state.email === '' || this.state.password === '') {
        alert('Not all required fields have values.')
      } 
      else {
        this.login();
      }
    }
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-header" align="center">
          Login
        </div>
        <div className="login-body">
          <div align="center">
            <input id="login_email" onChange={this.updateEmail} onKeyDown={this.handleKeyPress} type="text" placeholder="email@sms.ed.ac.uk" size="20"></input>
          </div>
          <br/>
          <div align="center">
            <input id="login_pword" onChange={this.updatePassword} onKeyDown={this.handleKeyPress} type="password" placeholder="password"></input>
          </div>
          <br/>
          <div align="center">
            <div onClick={this.login} className="login-button">login</div>
          </div>
        </div>
        <a onClick={this.toggleRegister} className="register-link">register</a>
      </div>
    );
  }
}