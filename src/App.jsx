import { useState } from 'react'
import "./style.css"

function Square({value,onSquareClick}){
  return(
    <button onClick={onSquareClick}>{value}</button>
  )
}
 
function App() {

  const [square,setSquare]=useState(Array(9).fill(null));
  const [isNext,setIsNext]= useState(true);
   
  function handleClick(i)
  {  
    if(calculateWinner(square)||square[i]!=null)
    return;

    const nextSquare = square.slice();


    if(isNext)
    {
      nextSquare[i]="X";
    }
    else{
      nextSquare[i]="O";
    }
    setSquare(nextSquare);
    setIsNext(!isNext);

  }

  const winner = calculateWinner(square);
  const draw = checkDraw(square);
  let status;
  if(draw)
  status ="Nobody won the match !!!"
  else if(!winner)
  { 
     if(isNext)
         status = "Next Player X";
      else
        status = "Next Player O";
      
  }
  else
     status = "Winner is "+ winner;

   return(
    <>
    <div className='status'>{status}</div>
    <div className='BoardRow'>
      <Square value={square[0]} onSquareClick={()=>handleClick(0)}/>
      <Square value={square[1]} onSquareClick={()=>handleClick(1)}/>
      <Square value={square[2]} onSquareClick={()=>handleClick(2)}/>
    </div>
    <div className='BoardRow'>
      <Square value={square[3]} onSquareClick={()=>handleClick(3)}/>
      <Square value={square[4]} onSquareClick={()=>handleClick(4)}/>
      <Square value={square[5]} onSquareClick={()=>handleClick(5)}/>
    </div>
    <div className='BoardRow'>
      <Square value={square[6]} onSquareClick={()=>handleClick(6)}/>
      <Square value={square[7]} onSquareClick={()=>handleClick(7)}/>
      <Square value={square[8]} onSquareClick={()=>handleClick(8)}/>
    </div>
    </>
   )
}
function calculateWinner(square)
{ 
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
    for(let i =0;i<lines.length;i++){
        const[a,b,c]=lines[i];
        if(square[a] && square[a]===square[c]&& square[b]===square[c])
        {
          return square[a];
        }
      
      
    }
    
    return null;
  
  
}

function checkDraw(square)
{
   for(let i =0;i<square.length;i++)
   {
      if(!square[i])
      return false;
   }
   return true;
}

export default App

 