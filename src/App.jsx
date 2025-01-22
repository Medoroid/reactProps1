// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Layout from './componients/Layout/Layout'
import About from './componients/About/About'
import Portfolio from './componients/Portfolio/portfolio'
import Contact from './componients/Contact/Contact'
import Home from './componients/Home/Home'
import './App.css'
import Child from './componients/Child/child'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState } from 'react'

function App() {


let routs = createBrowserRouter([
  {path:'/' , element:<Layout></Layout> , children:[
    {index:true , element:<Home></Home>},
    {path:'About' , element:<About></About>},
    {path:'Portfolio', element:<Portfolio ></Portfolio>},
    {path:'Contact', element:<Contact></Contact>}
  ]}
])
  return (
    <>
     <RouterProvider router={routs} ></RouterProvider>
    </>
  )
}

export default App
