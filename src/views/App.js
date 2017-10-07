import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import Navbar from '../components/Navbar';
import Login from './Login';
import Register from './Register';

import {
  verifyAuthToken,
  postLogin
} from '../helpers/networking.js';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      authToken: null,
      showRegister: false
    }
  }

  componentDidMount = () => {
    // Try get the authToken if it exists.
    var authToken = localStorage.getItem('authToken');
    // Check Token is valid via API.
    verifyAuthToken(authToken, (valid) => {
      // Set state appropriately.
      if (valid) { this.setState({ loading: false, authToken: authToken }); }
      else { this.setState({ loading: false }); localStorage.removeItem('authToken'); }
    });
  }

  /* Toggles Showing/Hiding of Register Page */
  toggleRegister = () => {
    var currState = this.state.showRegister;
    console.log("Toggling register from: " + currState);
    this.setState({
      showRegister: !currState
    });
  }

  
  login = (username, password) => {
    alert('Username: ' + username + '\n Password: ' + password);
    postLogin(username, password, (authToken) => {
      alert('Login attempt returned authToken: ' + authToken);
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loading-spinner">
          <Spinner name="cube-grid" />
        </div>
      );
    }
    else {
      if (this.state.authToken != null) {
        return (
          <div>
            <Navbar />
            This component will host the logic to determine which view to show.
          </div>
        );
      }
      else {
        if (this.state.showRegister) {
          return (
            <div>
              <div className="middle-logo">
                <img alt="LOGO" src="http://via.placeholder.com/64x64" />
              </div>
              <Register toggleRegister={this.toggleRegister} />
            </div>
          );
        }
        else {
          return (
            <div>
              <div className="middle-logo">
                <img alt="LOGO" src="http://via.placeholder.com/64x64" />
              </div>
              <Login toggleRegister={this.toggleRegister} login={this.login} />          
            </div>
          );
        }
      }
    }
  }
}

export default App;
