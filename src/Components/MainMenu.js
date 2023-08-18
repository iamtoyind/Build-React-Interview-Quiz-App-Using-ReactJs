import React, {useContext} from 'react';
import { QuizConcept } from '../Helpers/Context';
import "../App.css";

export default function MainMenu(){
  const {gameState, setGameState} = useContext(QuizConcept);
  return(
    <div className='Menu'>
      <button onClick={()=>{
        setGameState("quiz");
      }}
      
      >Start Quiz</button>
    </div>
  )
}