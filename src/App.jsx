import './App.css'
import { useState } from 'react'
import QuoteBox from './components/QuoteBox'
import db from "./db/quotes.json"
import { Animated } from 'react-animated-css'

const arrayColors = [
  "#65647C","#F6AE99", "#7F669D" ,"#CE97B0", "#898AA6",
"#5d97d1", "#ffafcc", "#B97A95", "#A267AC", "#FBC6A4", 
"#046582", "#6E7582", "#763857", "#BFB051", "#85586F"
]

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
      <QuoteBox 
      quote={quote} 
      newQuote={newQuote} 
      color={color} />
    </div>
  )
}

export default App
