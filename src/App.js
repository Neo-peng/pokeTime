import React from 'react';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import {Route, BrowserRouter} from "react-router-dom"
import Post from "./components/Post.js"

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/:post_id" component={Post}/>
        </div>
      </BrowserRouter>
        
    )
  };
}

export default App;
