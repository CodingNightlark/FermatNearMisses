
function findNearMiss(){

    let tolerance = 0.0001
    let xRand = Math.floor(Math.random() * 1000) + 1000;
      
 
    for(let x = xRand; x < xRand+2000; x++) {
        for(let y = xRand ; y < xRand + 2000; y++) {     
            for(let n = 3; n <= 10; n++) {  
                    let a = Math.pow(x, n)
                    let b = Math.pow(y, n)
                    let idealC = Math.pow((a+b), (1/n))
                    
                    if (Math.abs(idealC - Math.round(idealC)) < tolerance) {
                    
                            return { a: x, b: y, c:Math.round(idealC), n: n }
                        
                    }
                }
        }
 
    }
    return null // No near miss found 
    


} 
export default findNearMiss

