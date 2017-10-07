import React, { Component } from 'react';
import '../../styles/Register.css';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  }

  register = () => {
    this.props.register(this.state.first_name, this.state.last_name, this.state.email, this.state.password);
  }

  toggleRegister = () => {
    this.props.toggleRegister();
  }

  updateFirstname = (event) => {
    this.setState({first_name: event.target.value});
  }

  updateLastname = (event) => {
    this.setState({last_name: event.target.value});
  }
  
  updateEmail = (event) => {
    this.setState({email: event.target.value});
  }

  updatePassword = (event) => {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div className="register-container">
        <div className="register-header" align="center">
          Register
        </div>
        <div className="register-body">
          <div align="center">
            <input id="register_fname" onChange={this.updateFirstname} type="text" placeholder="First Name"></input>
          </div>
          <br/>
          <div align="center">
            <input id="register_lname" onChange={this.updateLastname} type="text" placeholder="Last Name"></input>
          </div>
          <br/>
          <div align="center">
            <input id="register_email" onChange={this.updateEmail} type="text" placeholder="email@sms.ed.ac.uk" size="20"></input>
          </div>
          <br/>
          <div align="center">
            <input id="register_pword" onChange={this.updatePassword} type="password" placeholder="password"></input>
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