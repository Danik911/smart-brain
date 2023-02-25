import React from 'react';
import Tilt from 'react-parallax-tilt'
import brain from "./artificial-intelligence.png"
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0" >
        <Tilt className="Tilt br2 shadow-2 pa3" options={{max:55}} style={{height:150, width:150}}>
        <div >
          <img alt="logo" src={brain} />
        </div>
      </Tilt>
        </div>
    )
}

export default Logo