import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './Chai'
// import {jsx as _jsx} from  react

function App() {
  // const [count, setCount] = useState(0)
  const username ="Raju will become "
  var username2="Raju is obviously going to"
  var statusnow = "Trillionire"
  if (username.length>100) {
    return (
      <>
      <h1> {username}  the new {statusnow} </h1>
      <Chai/>
      </>
    )
  }
  else{
    return (
      <>
      <h1> {username2} be the new {statusnow} </h1>
      <Chai/>
      </>
    )
  }

}

export default App
