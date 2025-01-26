import React, { useEffect, useState } from 'react'
export default function Child(users ,func ) {
// import style from 'Child.module.css'

console.log(users)
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>Username: {users.username}</h3>
      <p>Job: {users.job}</p>
      <p>Age: {users.age}</p>
      <button className='bg-red-400 p-1' onClick={func}><i className=' fa-trash-can text-black'></i>del</button>
    </div>
  );
}