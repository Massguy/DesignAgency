
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Navbar';
import About from './Components/Home/about/About.jsx'
import {
  BrowserRouter as Router,
Route,
Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <Switch>
     <Route path="/" component={Home} exact/>
       
    <Route path="/about" component={About}/>
      
    </Switch>
    </div>
    </Router>
  );
}

export default App;
