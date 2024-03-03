import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counterValue, setCounter] = useState(9)
  
  //var counterValue= 9;
  const addvalue = ()=>{
   // counterValue = counterValue+1;
   if(counterValue<20){
    setCounter(counterValue+1)
    console.log(counterValue);
   }
    

  };
  const removeValue=()=>{
    if(counterValue>0){
    setCounter(counterValue-1)
    console.log(counterValue)
    }
  }
  return (
    <>
      <div id="start">
        <h1>chai aur React</h1>
        
        <h1>Counter Value : {counterValue}</h1>
        <button  
        onClick={addvalue}
        >Add Value : {counterValue}</button>
        <br />
        <button
        onClick ={removeValue}>Remove Value : {counterValue}</button>

      </div>

    </>
  )
}

export default App
