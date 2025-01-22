import React, { useEffect, useState } from 'react'
// import style from 'Child.module.css'
export default function Child({username}) {
    const [count, setcount] = useState(0)
    useEffect(()=>{
        
    },[])
console.log(username)
  return <>
  <h3>{username}</h3>
  <h3>{}</h3>
  <h3>{}</h3>
  <h3>{}</h3>
  </>
}
