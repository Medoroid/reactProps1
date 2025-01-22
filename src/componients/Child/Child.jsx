import React, { useEffect, useState } from 'react'
// import style from 'Child.module.css'
export default function Child(props) {
const {username , job , gender , age} = props
console.log(props.username)
  return <>
  <h3>{username}</h3>

  </>
}
