import React from 'react'

const QuoteButton = ({newQuote, color}) => {
  return (
    <button className='quoteBox__button' onClick={newQuote} style={{backgroundColor: color}} >
      <i className='bx bx-refresh'></i>
    </button>
  )
}

export default QuoteButton