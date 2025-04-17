import { useState } from 'react'
import './App.css'

function App() {
  const [feedback, setfeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
}

export default App
