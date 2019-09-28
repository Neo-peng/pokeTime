import React from 'react';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import {Route, BrowserRouter} from "react-router-dom"

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </div>
      </BrowserRouter>
        
    )
  };
}

export default App;
