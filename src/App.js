import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartElection from "./Pages/StartElection";
import HomePage from "./Pages/HomePage";
import Voting from './Pages/Voting';
import Results from './Pages/Results';


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/startElect" element={<StartElection/>} />
          <Route path="/vote" element={<Voting/>} />
          <Route path="/results" element={<Results/>}/>
        </Routes>
      </div>
      
  </Router>
   
  );
}

export default App;
