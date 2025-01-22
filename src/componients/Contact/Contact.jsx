
import React, { useEffect, useState } from 'react'
// import style from 'Contact.module.css'
export default function Contact() {
    const [count, setcount] = useState(0)
    function submitData(){
      setcount(count+1)
    }
    useEffect(()=>{
        
    },[])
  return <>
  <button onClick={submitData}>push</button>
  {count}
  </>
}
