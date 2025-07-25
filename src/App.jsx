import { useState } from 'react'
import {motion} from 'framer-motion'
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import findNearMiss from './Math.jsx'
import './App.css'

function App() { 

  const [result, setResult] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const [ minX, setMinX ] = useState(1000)
  const [ maxX, setMaxX ] = useState(3000)
  const [ minN, setMinN ] = useState(1000)
  const [ maxN, setMaxN ] = useState(3000)
   
  const handleClick = () => {
    if (result) {
      findNearMiss() // Reset the search if a result already exists
    }
    setLoading(true)
    setTimeout(() => {
       const nearMiss = findNearMiss({minX, maxX, minN, maxN})
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
      
      <div className="inputs">
        <label>
          Range for x and y seed:
          <input 
            type="number"
            value={minX}
            onChange={(e) => setMinX(Number(e.target.value))} />
            to
            <input 
            type="number"
            value={maxX}
            onChange={(e) => setMaxX(Number(e.target.value))} />
        </label>
        <br/>
        <label>
          Range for n:
          <input 
            type="number"
            value={minN}
            onChange={(e) => setMinN(Number(e.target.value))} />  
            to
            <input 
            type="number"
            value={maxN}
            onChange={(e) => setMaxN(Number(e.target.value))} />
        </label>
      </div>

      <motion.div 
        className="carousel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >  
        <p className="notebook">
          Fermat's Last Theorem states that there are no three positive integers a, b, and c that satisfy the equation: 
           <InlineMath math = {`a^n + b^n = c^n`} /> for any integer value of n greater than 2.
          However, near misses can occur when the left-hand side is very close to the right-hand side, but not exactly equal. </p>
   
        </motion.div>

       
    </>  
  ) 
}

export default App
