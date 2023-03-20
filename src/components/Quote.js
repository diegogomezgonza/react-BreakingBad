import React from 'react'

// Pasar contenido por props
const Quote = ({quote}) => {
    //Contenido del quote
  return (
    <p>
        {quote.text}
        <br></br>
        <span> {quote.author} </span>
      </p>
  )
}

export default Quote