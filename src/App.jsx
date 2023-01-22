import './App.css'
import QuoteBox from './components/QuoteBox'
import db from "./db/quotes.json"

function App() {
  const getRandom = (arrayElements) => {
    const quantityValues =arrayElements.length
    const randomIndex = Math.floor(Math.random() * quantityValues)
    return arrayElements[randomIndex]
  }

  const [quote, setQuote] = useState(getRandom(db))

  return (
    <div className="App">
      <QuoteBox quote={quote} />
    </div>
  )
}

export default App
