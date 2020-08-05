import React from 'react'
import he from 'he'
import { Button } from 'reactstrap'

export const Answer = ({ text, correct, setResult, setIndex, index }) => {
  function answerResult() {
    setIndex(index + 1)
    correct === text ? setResult(true) : setResult(false)
  }

  const decode = he.decode(String(text))

  return (
    <Button className="ansButton" onClick={answerResult}>
      {decode}
    </Button>
  )
}