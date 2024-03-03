// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'

function App() {
  // const [count, setCount] = useState(0)
  var myObj={
    Name:"Raju",
    Age:31,
    Occupation:"Coder and Going To Become Trillionire"
  }
  let occupation="Coder and Going To Become Trillionire"
  return (
    <>
      <h1 className='bg-green-400 text-black  p-4 rounded-xl mb-4'>Tailwind classes</h1>

     <Cards username="Raju" channel="chaiAurCode" someObject={occupation}/>
     <Cards username="Bapi" channel="Raju's Youtube channel" btnText="View the Profile"someObject={occupation}/>
     
    </>
  )
}

export default App
