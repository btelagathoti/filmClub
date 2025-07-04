import {Home, HomeTwo} from "./Components/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Loginform from "./Components/Loginform";
import Signup from "./Components/Signup";
import UserProfile from './Components/UserProfile';
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Privacy from "./Components/Privacy";
import AllActors from "./Components/AllActors";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min';
import Backendwork from "./Components/Backendwork.js";
import AuditionVideos from "./Components/AuditionVideos";
const App = () =>{
  


  return (
    <div >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element= {<Home />}/>
          <Route path="/loginform" element= {<Loginform />} />
          <Route path="/Signup" element= {<Signup />} />
          <Route path='/UserProfile' element = {<UserProfile />}/>
          <Route path="/contact" element= {<Contact />} />
          <Route path="/privacy" element= {<Privacy />} />
          <Route path="/allActors" element= {<AllActors />} />
          <Route path="/Backendwork" element= {<Backendwork />}/>
          <Route path="/audition-videos/:actorId" element={<AuditionVideos />} />
        </Routes>
      </Router>
    </div>
  ) 
}

export default App;