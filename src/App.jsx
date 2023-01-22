import './App.css'
import { useState } from 'react'
import QuoteBox from './components/QuoteBox'
import db from "./db/quotes.json"

function App() {
  const getRandom = (arrayElements) => {
    const quantityValues =arrayElements.length
    const randomIndex = Math.floor(Math.random() * quantityValues)
    return arrayElements[randomIndex]
  }

  const [quote, setQuote] = useState(getRandom(db))

  const newQuote = () => {
    setQuote(getRandom(db))
  }

  return (
    <div className="App">
      <QuoteBox quote={quote} newQuote={newQuote} />
    </div>
  )
}

export default App
