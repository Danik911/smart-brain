import Logo from "./components/logo/Logo";
import Navigation from "./components/navigation/Navigation";
import './App.css'
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Navigation />
      </div>
    );
  }
}

export default App;
