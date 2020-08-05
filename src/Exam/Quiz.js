import React, { useState } from "react"
import { Toggle } from './Toggle'
import { Question } from './Question'
import QuestionHeader from './QuestionHeader'
import Jumbotron from "reactstrap/lib/Jumbotron"
import LoadingSpin from './LoadingSpin'
// import { Answer } from './Answer'
import { AnswerList } from './AnswerList'
import GameOver from "./GameOver";
import { ScoreBoard } from "./ScoreBoard";
import ScoreHeader from "./ScoreHeader";

export const Quiz = () => {
  var [index, setIndex] = useState(0)
  const [questionData, setQuestionData] = useState([])
  const questions = questionData.map(({ question }) => [question])
  const answers = questionData.map(({ incorrect_answers, correct_answer }) => [correct_answer, incorrect_answers].flat())
  const [toggleView, setToggleView] = useState(true)
  const [isLoading, setLoading] = useState(false)
  var [result, setResult] = useState(null)
  var [right, setRight] = useState(0)
  var [gameIsOver, setGameOver] = useState(false)

  return (
    <>
      {
        toggleView && (
          <Toggle
            setIndex={setIndex}
            setQuestionData={setQuestionData}
            setToggleView={setToggleView}
            setLoading={setLoading}
          />
        )
      }
      {
        !toggleView && !gameIsOver && (isLoading ? (<LoadingSpin />) : (
          <Jumbotron>
            <QuestionHeader setToggleView={setToggleView} />
            <Question question={questions[index]} />
            <AnswerList answers={answers[index]} index={index} setResult={setResult} setIndex={setIndex} />
          </Jumbotron>
        ))
      }
      {gameIsOver && (
        <Jumbotron>
          <ScoreHeader setGameOver={setGameOver} setToggleView={setToggleView} />
          <ScoreBoard right={right} finalScore={right / index} />
        </Jumbotron>
      )}
      <GameOver
        right={right}
        setRight={setRight}
        quizLength={questions.length}
        setGameOver={setGameOver}
        result={result}
        index={index}
      />
    </>
  )
}