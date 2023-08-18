import React, { useState, useContext } from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizConcept } from '../Helpers/Context';
import "../App.css";

function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');
  const { score, setScore, setGameState } = useContext(QuizConcept);

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
    setOptionChosen(''); 
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState('endscreen');
  };

  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={() => setOptionChosen('A')}  className={optionChosen === 'A' ? 'chosen' : ''}>{Questions[currQuestion].optionA}</button>
        <button onClick={() => setOptionChosen('B')}  className={optionChosen === 'B' ? 'chosen' : ''}>{Questions[currQuestion].optionB}</button>
        <button onClick={() => setOptionChosen('C')}  className={optionChosen === 'C' ? 'chosen' : ''}>{Questions[currQuestion].optionC}</button>
        <button onClick={() => setOptionChosen('D')}  className={optionChosen === 'D' ? 'chosen' : ''}>{Questions[currQuestion].optionD}</button>

      </div>

      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default Quiz;
