import React from 'react'

const QuoteButton = ({newQuote, color}) => {
  return (
    <button onClick={newQuote} style={{backgroundColor: color}} >
      <i className='bx bx-refresh'></i>
    </button>
  )
}

export default QuoteButton