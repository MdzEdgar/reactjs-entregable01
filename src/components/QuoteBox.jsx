import React from 'react'

const QuoteBox = ({quote}) => {
  return (
    <div>
      <p>{quote.quote}</p>
      <h3>{quote.author}</h3>
    </div>
  )
}

export default QuoteBox