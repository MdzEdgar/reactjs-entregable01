import React from 'react'

const QuoteButton = ({newQuote}) => {
  return (
    <button onClick={newQuote}>
      <i className='bx bx-refresh'></i>
    </button>
  )
}

export default QuoteButton