import { useState } from 'react'

function Square(value,onSquareClick){
  return(
    <button onClick={onSquareClick}>{value}</button>
  )
}
 
function App() {

  const [square,setSquare]=useState(Array(9).fill(null));

  function handleClick()
  {

  }
   return(
    <>
    <div>
      <Square value={square[0]} onSquareClick={()=>handleClick()}/>
    </div>
    </>
   )
}
function calculateWinner()
{
  
}

export default App
