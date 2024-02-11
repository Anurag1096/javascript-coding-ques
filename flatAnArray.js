
// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
    // your imeplementation here
     return arr.reduce((a,b)=> {
      
      return a.concat(Array.isArray(b) && depth !== 0?flat(b,depth-=1):b)
      
      },[])
  }
  flat([1,[2],[3,[4]]])