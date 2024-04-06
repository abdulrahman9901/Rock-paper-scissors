import './App.css';
import GameComponent from './components/play';
import ScoreComponent from './components/score';
import RulesModal from './components/rulesModal';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route ,useNavigate} from "react-router-dom";
import ResultComponent from './components/result';
import React, { useState } from 'react';

export default function App() {
  const [score, setScore] = useState(0);
  const updateScore = (newScore) => {
    setScore(score + newScore);
  };

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <ScoreComponent score={score} />
      <Routes>
        <Route path="/" element={<GameComponent />} />
        <Route
              path="result/:option"
              element={<ResultComponent updateScore={updateScore} />}
            />
        <Route path="*" element={<h1>Null</h1>} />
      </Routes>
      <RulesModal />
      </header>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);