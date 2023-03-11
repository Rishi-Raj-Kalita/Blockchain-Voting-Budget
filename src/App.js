import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartElection from "./Pages/StartElection";
import HomePage from "./Pages/HomePage";


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/startElect" element={<StartElection/>} />
        </Routes>
      </div>
      
  </Router>
   
  );
}

export default App;
