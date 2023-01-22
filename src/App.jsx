import './App.css'
import db from "./db/quotes.json"

function App() {
  const getRandom = (arrayElements) => {
    const quantityValues =arrayElements.length
    const randomIndex = Math.floor(Math.random() * quantityValues)
    return arrayElements[randomIndex]
  }

  return (
    <div className="App">
      
    </div>
  )
}

export default App
