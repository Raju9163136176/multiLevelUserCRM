import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200 p-0"
     style={{backgroundColor:color}}
     
     ></div>
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
        <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
           <button
           onClick={()=>setColor("red")}
           className='outline-none px-4 rounded-2xl px-4 py-2 text-white'
           style={{backgroundColor:"red"}}>Red
           </button>
           <button
           onClick={()=>setColor("green")}
           
           className='outline-none px-4 rounded-2xl px-4 py-2 text-white'
           style={{backgroundColor:"green"}}>Green
           </button>
           <button
           onClick={()=>setColor("blue")}
           
           className='outline-none px-4 rounded-2xl px-4 py-2 text-white'
           style={{backgroundColor:"blue"}}>Blue
           </button>

           <button
           onClick={()=>setColor("green")}
           
           className='outline-none px-4 rounded-2xl px-4 py-2 text-white'
           style={{backgroundColor:"green"}}>Green
           </button>

           <button
           onClick={()=>setColor("white")}
           
           className='outline px-4 rounded-2xl px-4 py-2 text-black '
           style={{backgroundColor:"white"}}>Offwhite
           </button>

           <button
           onClick={()=>setColor("black")}
           
           className='outline-none px-4 rounded-2xl px-4 py-2 text-white '
           style={{backgroundColor:"black"}}>Black
           </button>


        </div>
     </div>
    </>
  )
}

export default App
