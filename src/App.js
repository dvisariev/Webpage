import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/signIn';
import Form from './components/navigation/signInForm';
import Logo from './components/Logo/Logo';
import Particles from 'react-particles-js';


const particleOptions = { // downloaded - react particles for npm
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 300
      }
    }
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      route: 'showForm' //check the state of the sign in button. In this case the form will be not shown in the main page. Line 44
    }
  }

  userClicksCheckIn = () => {
    console.log('clicked');
  }

  render() {
    return (
      <div className="App">
        <Particles className = 'particles' 
          params={particleOptions}
        />
      {/* From SignIn*/}
        <Navigation  userClicksCheckIn = { this.userClicksCheckIn }/>
        {
           this.state.route === 'showForm' ?  <Form /> : <div> <Logo /> </div> // If the user clicks on Sign in button, then the Form (from SignInForm) will show up
        }

       

       
        {
        // Advertisements
        // About us
        // Contacts
        }
      </div>
    );
  }
}

export default App;
