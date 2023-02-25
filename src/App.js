import Logo from "./components/logo/Logo";
import Navigation from "./components/navigation/Navigation";
import './App.css'
import React, { Component } from 'react';
import ImageLinkForm from "./components/image_link_form/ImageLinkForm";
import ParticlesBg from 'particles-bg'

let config = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-40, 40],
  alpha: [0.6, 0],
  scale: [.1, 0.4],
  position: "all",
  color: ["random", "#ff0000"],
  cross: "dead",
  // emitter: "follow",
  random: 15,
  onParticleUpdate: (ctx, particle) => {
    ctx.beginPath();
    ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
    ctx.closePath();
}
};

class App extends Component {
  render() {
    return (
      <div className="App">
         <ParticlesBg type="cobweb" config={config} bg={true} />
        <Navigation />
        <Logo />
        <ImageLinkForm/>
      </div>
    );
  }
}

export default App;
