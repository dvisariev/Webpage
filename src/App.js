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

  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false
    };

    this.userClicksCheckIn = this.userClicksCheckIn.bind(this);
  }

  userClicksCheckIn () {
    console.log('clicked');
    this.setState(prevState => {
      return {
        isFormOpen: !prevState.isFormOpen
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Particles className = 'particles' 
          params={particleOptions}
        />
      {/* From SignIn*/}
        <Navigation />
          {
             Logo /* The Logo is shown constantly on the page */
          }

        <div>
         <button className = ' pointer f3 link dim ba bw1 ph3 pv2 mb2 dib white bg-dark-blue fr'
                  onClick = { this.userClicksCheckIn } 
          >Sign in</button>

          { this.state.isFormOpen && Form /* The SignInForm is shown after the user clicks on the Sign in Button */ } 
        </div>

       
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
