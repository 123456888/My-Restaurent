import './App.css'
import Apps from "./component/Apps";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Pizza from "./components/Pizza";
import Dish from "./components/Dish";
import Salad from "./components/Salad";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route exact path = "/" element = {<Banner/>}/>
          <Route exact path = "/Gallery" element = {<Gallery/>}/>
          <Route exact path = "/" element = {<Gallery/>}/>
          <Route exact path = "/Pizza" element = {<Pizza/>}/>
          <Route exact path = "/" element = {<Gallery/>}/>
          <Route exact path = "/Dish"element = {<Dish/>}/>
          <Route exact path = "/" element = {<Gallery/>}/>
          <Route esxat path = "/Salad" element = {<Salad/>}/>
          <Route exact path = "/" element = {<Navbar/>}/>
          <Route exact path = "/Second" element = {<Menu/>}/>
          <Route exact path = "/" element = {<Navbar/>}/>
          <Route exact path = "/Contact" element = {<Contact/>}/>
        </Routes>
      </Router>
      <Apps/>
    </div>
  );
}

export default App;
