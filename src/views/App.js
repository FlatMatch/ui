import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import Login from './Login';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      authToken: null
    }
  }

  componentDidMount = () => {
    // Try get the authToken if it exists.
    var authToken = localStorage.getItem('authToken');
    console.log(authToken);
    // Mock API.
    setTimeout(() => { this.setState({loading: false}); }, 5000);
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
        return (
          <Login />          
        );
      }
    }
  }
}

export default App;
