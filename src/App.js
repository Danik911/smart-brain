import Logo from "./components/logo/Logo";
import Navigation from "./components/navigation/Navigation";
import './App.css'
import React, { Component } from 'react';
import ImageLinkForm from "./components/image_link_form/ImageLinkForm";
import ParticlesBg from 'particles-bg'
import Clarifai from 'clarifai'

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

const app = new Clarifai.App({
  apiKey: "4e43ec72bd1847a5b87b794cd30782a0"
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: '',
      isSignedIn: false,
      user: {}
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onSubmitClicked = () => {
   this.setState({ imageUrl: this.state.input })
  }

  render() {
    const {isSignedIn, imageUrl, route, box} = this.state
    return (
        <div className="App">
       <ParticlesBg type="cobweb" config={config} bg={true} />
        <Navigation />
        <Logo />
        <ImageLinkForm
          onSubmitClicked={this.onSubmitClicked}
          onInputChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default App;
