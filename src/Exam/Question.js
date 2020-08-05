import React from 'react'
import he from 'he'

export const Question = ({ question }) => {
  let decode = he.decode(String(question))

  return (
    <div>
      <hr className="my-2" />
      <h1 className="display-5" >
        {decode}
      </h1>
      <hr className="my-2" />
      <br />
    </div>
  )
}

