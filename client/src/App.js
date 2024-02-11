import './App.css';
import Main from './components/main.js';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Main/>} exact/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
