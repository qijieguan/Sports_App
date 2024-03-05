import './App.css';
import Home from './components/Home.js';
import Roster from './components/Roster.js';
import SideNav from './components/SideNav.js';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App flex">
      <Router>
        <SideNav/>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path=":Team?/Roster" element={<Roster/>} exact/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
