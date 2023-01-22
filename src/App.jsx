import './App.css'
import { useState } from 'react'
import QuoteBox from './components/QuoteBox'
import db from "./db/quotes.json"

const arrayColors = [
  "#067BC2","#84BCDA", "#F37748" ,"#ECC30B", "#D56062",
"#574D68", "#E0E1DD", "#A72608", "#676F54", "#D64933"]

function App() {
  const getRandom = (arrayElements) => {
    const quantityValues =arrayElements.length
    const randomIndex = Math.floor(Math.random() * quantityValues)
    return arrayElements[randomIndex]
  }

  const [quote, setQuote] = useState(getRandom(db))

  const [color, setColor] = useState(getRandom(arrayColors))

  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
  }

  return (
    <div className="App" style={{backgroundColor: color}} >
      <QuoteBox quote={quote} newQuote={newQuote} color={color} />
    </div>
  )
}

export default App
