import React, { useEffect, useState } from 'react'
// import style from 'Portfolio.module.css'
import Child from '../Child/child'
import img1 from '../../assets/imgs/slider-1.jpg'
import img2 from '../../assets/imgs/slider-2.jpg'
import img3 from '../../assets/imgs/slider-3.jpg'
import img4 from '../../assets/imgs/slider-4.jpg'
import img5 from '../../assets/imgs/slider-5.jpg'
import img6 from '../../assets/imgs/team-02.jpg'
import img7 from '../../assets/imgs/team-03.jpg'
import img8 from '../../assets/imgs/team-04.jpg'
export default function Portfolio() {

    const [count, setcount] = useState(0)
    // useEffect(()=>{
      let [user , setuser] = useState([
        {username:'medo1',job:'frontend',gender:'male',age:21},
        {username:'medo2',job:'frontend',gender:'male',age:22},
        {username:'medo3',job:'frontend',gender:'male',age:23},
        {username:'medo4',job:'frontend',gender:'male',age:24},
      ])
      console.log(user)
    // },[])
  return <>
  <section className="gallry">
    <div className="container mx-auto">
      <div className="gallryRow grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {/* {user.map((element)=>{return <Child userData={user}></Child>})} */}
      <Child username={user.username}></Child>
      
      </div>
    </div>
  </section>
  </>
}
