import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import Navbar from '../components/Navbar';
import Login from './Login';
import Register from './Register';
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
    console.log(authToken);
    // Mock API.
    setTimeout(() => { this.setState({loading: false}); }, 500);
  }

  /* Toggles Showing/Hiding of Register Page */
  toggleRegister = () => {
    var currState = this.state.showRegister;
    console.log("Toggling register from: " + currState);
    this.setState({
      showRegister: !currState
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
              <Login toggleRegister={this.toggleRegister} />          
            </div>
          );
        }
      }
    }
  }
}

export default App;
