import { useState } from 'react'
import findNearMiss from './Math.jsx'
import './App.css'

function App() {

  const [result, setResult] = useState(null)
  const [ loading, setLoading ] = useState(false)
   
  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
       const nearMiss = findNearMiss()
      setResult(nearMiss)
      setLoading(false)
    }, 100) // Simulate loading time 
    
  } 
 
  return ( 
    <>
      <div className = "App">
        {loading && <p>Searching for near-miss...</p>}

        {!loading && result && (
          <div>
            <h2>Near Miss Found!</h2>
            <p>a: {result.a}</p>
            <p>b: {result.b}</p>
            <p>c: {result.c}</p>
            <p>n: {result.n}</p>
          </div>
        )}

        {!loading && !result && (
          <button onClick={handleClick}>Find Near Miss</button>
        )}

        {!loading && result === null && <p>No near miss found.</p>}


      </div>
    </> 
  ) 
}

export default App
