import Logo from "./components/logo/Logo";
import Navigation from "./components/navigation/Navigation";
import './App.css'
import React, { Component } from 'react';
import ImageLinkForm from "./components/image_link_form/ImageLinkForm";
import ParticlesBg from 'particles-bg'
import Clarifai from 'clarifai'
import FaceRecognition from "./components/face_recognition/FaceRecognition";

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
  apiKey: "ac6a09a60bb94413a71460117bd72825"
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

   app.models
   .predict(
     {
       id: 'face-detection',
       name: 'face-detection',
       version: '6dc7e46bc9124c5c8824be4822abe105',
       type: 'visual-detector',
     }, this.state.input)
   .then(response => {
     console.log('hi', response)
    //  if (response) {
    //    fetch('http://localhost:3000/image', {
    //      method: 'put',
    //      headers: {'Content-Type': 'application/json'},
    //      body: JSON.stringify({
    //        id: this.state.user.id
    //      })
    //    })
    //      .then(response => response.json())
    //      .then(count => {
    //        this.setState(Object.assign(this.state.user, { entries: count}))
    //      })

    //  }
    //  this.displayFaceBox(this.calculateFaceLocation(response))
   })
   .catch(err => console.log(err));
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
           <FaceRecognition imageUrl={imageUrl} />
      </div>
    );
  }
}

export default App;
