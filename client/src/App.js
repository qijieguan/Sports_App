import './App.css';
import Home from './components/Home.js';
import Roster from './components/Roster.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path=":Team?/Roster" element={<Roster/>} exact/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
