import React from "react";
import Home from "./Components/Home";
import Loginform from "./Components/Loginform";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Privacy from "./Components/Privacy";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App = () =>{
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/loginform" element= {<Loginform />} />
          <Route path="/Signup" element= {<Signup />} />
          <Route path="/contact" element= {<Contact />} />
          <Route path="/privacy" element= {<Privacy />} />
        </Routes>
      </Router>
    </div>
  ) 
}

export default App;