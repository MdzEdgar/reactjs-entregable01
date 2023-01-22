import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote}) => {
  return (
    <div>
      <p>{quote.quote}</p>
      <h3>{quote.author}</h3>
      <i className='bx bxs-quote-alt-left'></i>
      <QuoteButton />
    </div>
  )
}

export default QuoteBox