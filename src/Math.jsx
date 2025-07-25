
function findNearMiss(){

    let tolerance = 0.0001
    
 
    for(let x = 1000; x < 3000; x++) {
        for(let y = 1000; y < 3000; y++) {     
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

