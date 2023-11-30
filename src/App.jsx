import { useState } from 'react'
import './App.css'
import Person from './person'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Person/>
    </>
  )
}

export default App
