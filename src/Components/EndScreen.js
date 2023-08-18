import React, { useContext } from 'react';
import { QuizConcept } from '../Helpers/Context';
import '../App.css'; 
import { Questions } from '../Helpers/QuestionBank';

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizConcept);

  const restartQuiz = () => {
    setScore(0);
    setGameState('menu');
  };

  return (
    <div className='EndScreen'>
      <h1>Quiz Finished</h1>
      <h3>{score}/{Questions.length}</h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
