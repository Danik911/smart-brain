import React from "react";
import Tilt from 'react-parallax-tilt'

const Logo = () => {
    return (
        <div className="ma4 mt0" 
        style={{ height: '100px'}}
        >
        <Tilt className="Tilt br2 shadow-2" options={{max:25}}>
        <div >
          <h1>👀</h1>
        </div>
      </Tilt>
        </div>
    )
}

export default Logo