import { useState } from 'react'
import {motion} from 'framer-motion'
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import findNearMiss from './Math.jsx'
import './App.css'

function App() { 

  const [result, setResult] = useState(null)
  const [ loading, setLoading ] = useState(false)
   
  const handleClick = () => {
    if (result) {
      findNearMiss() // Reset the search if a result already exists
    }
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
        <h1>Fermat's <br/>
        
          <motion.span 
            whileHover ={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100 }}
            style ={{ display: 'inline-block' }}
            className="near-miss-title"
            >
              Near Misses
            </motion.span>
        </h1>
         
        {loading && <p>Searching for near-miss...</p>}

        {!loading && result && (
          <motion.div 
    
            className="result-box"
          >
        
            <p>Near Miss Found!</p>
            
            <InlineMath math={`${result.a}^${result.n} + ${result.b}^${result.n} \\approx ${result.c}^${result.n}`} />
            
          </motion.div>
       ) }
         

        {!loading && result === null && <p>No near miss found.</p>}

        <button onClick={handleClick}> {result ? "Find Another " : "Find Near Miss" } </button>
      </div>
    </> 
  ) 
}

export default App
