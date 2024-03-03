import React, { useEffect, useState } from 'react'
// import {userParams} from 'react-router-dom'
function Github() {
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setdata(data)
        })
    },[])
  return (
    <>
    <span>
        
        
        Github Followers :{data.followers}

    </span>
    <br />
    <span>
        Github Followers :{data.location}

    </span>
    </>
  )
}

export default Github