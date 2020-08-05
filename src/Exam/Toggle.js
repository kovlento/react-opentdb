import React from 'react'
import axios from 'axios'
import ToggleHeader from './ToggleHeader'
import { Button, Form } from 'reactstrap'

export const Toggle = ({
  setQuestionData,
  setToggleView,
  setIndex,
  setLoading
}) => {
  const getData = async () => {
    try {
      setLoading(true)
      const incomingData = await axios.get(`https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`)
      setQuestionData(incomingData.data.results)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <ToggleHeader />
      <Form onSubmit={(e) => {
        e.preventDefault()
        getData()
        setToggleView(false);
        setIndex(0)
      }}>
        <Button color="primary">开始</Button>
      </Form>
    </>
  )
}