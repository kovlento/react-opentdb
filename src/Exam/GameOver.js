import React, { useEffect } from 'react'

export default function GameOver({ right, setRight, setGameOver, index, quizLength, result }) {
  useEffect(() => {
    if (result === true) {
      setRight(right + 1)
    }
    if (index === quizLength && index) {
      setGameOver(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])
  return <div></div>
}