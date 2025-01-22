// import React, { useEffect, useState } from 'react'
import FooterStyle from './Footer.module.css'
export default function Footer() {
    // const [count, setcount] = useState(0)
    // useEffect(()=>{
        
    // },[])
  return <>
  <footer className="footer bg-section-color text-white p-10">
    <div className="container mx-auto">
      <div className="FooterRow flex text-center justify-between">
        <div className="box p-4 w-1/3">
          <h3 className={`pt-5 mb-2 font-medium ${FooterStyle.title}`}>LOCATION</h3>
          <p className='mb-4'>2215 John Daniel Drive</p>
          <p className='mb-4'>Clark, MO 65243</p>
        </div>
        <div className="box p-4 w-1/3">
          <h3 className={`pt-5 mb-2 font-medium ${FooterStyle.title}`}>AROUND THE WEB</h3>
          <ul className='flex justify-center'>
            <li className='rounded-full border mx-1'><a href="/" className='flex justify-center items-center'><i className={` ${FooterStyle.mediaIcon} fab fa-facebook`}></i></a></li>
            <li className='rounded-full border mx-1'><a href="/" className='flex justify-center items-center'><i className={` ${FooterStyle.mediaIcon} fab fa-twitter`}></i></a></li>
            <li className='rounded-full border mx-1'><a href="/" className='flex justify-center items-center'><i className={` ${FooterStyle.mediaIcon} fab fa-linkedin-in`}></i></a></li>
            <li className='rounded-full border mx-1'><a href="/" className='flex justify-center items-center'><i className={` ${FooterStyle.mediaIcon} fas fa-globe`}></i></a></li>
          </ul>
        </div>
        <div className="box p-4 w-1/3">
          <h3 className={`pt-5 mb-2 font-medium ${FooterStyle.title}`}>ABOUT FREELANCER</h3>
          <p className='mb-4'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </div>
  </footer>
  </>
}
