import './App.css';
import React, { useState } from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';

import { QuizConcept } from './Helpers/Context';

function App() {
  const [gameState, setGameState] = useState('menu'); // Using single quotes for consistency
  const [score, setScore] = useState(0);

  return (
    <div className='App'>
      <h1>Quiz App</h1>
      <QuizConcept.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === 'menu' && <MainMenu />}
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'endscreen' && <EndScreen />}
      </QuizConcept.Provider>
    </div>
  );
}

export default App;
