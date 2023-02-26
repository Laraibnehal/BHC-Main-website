import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </Router>
         </div>
  );
}

export default App;
