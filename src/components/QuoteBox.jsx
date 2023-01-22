import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote, newQuote, color}) => {
  return (
    <div style={{color: color}}>
      <p>{quote.quote}</p>
      <h3>{quote.author}</h3>
      <i className='bx bxs-quote-alt-left'></i>
      <QuoteButton color={color} newQuote={newQuote} />
    </div>
  )
}

export default QuoteBox