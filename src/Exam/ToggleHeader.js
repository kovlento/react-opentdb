import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

export default function ToggleHeader() {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-4">计算机知识小测验</h1>
      </Container>
    </Jumbotron>
  )
}