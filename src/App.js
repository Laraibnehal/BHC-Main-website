import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import About from './Pages/About';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        </Routes>
      </Router>
         </div>
  );
}

export default App;
