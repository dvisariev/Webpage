import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import D from './my_logo_D.png';

const Logo = () => {
    return (
        <div className = 'ma4 m70'>
            { /* Tilt className is for the background box of the logo. if you want to be shown, enter "Tilt br2 shadow-2" */ }
            <Tilt className="" options={{ max : 45 }} style={{ height: 200, width: 200 }} >
              <div className="Tilt-inner pa3"> 
                 <img style = {{paddingTop: '2px'}} alt = 'logo' src = { D }/> 
              </div>
            </Tilt>

        </div>
    )
}

export default Logo;