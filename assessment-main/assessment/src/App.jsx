import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Addproduct from './components/Addproduct'
import { Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Product Management Application</h1>
      
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='addproduct' element={<Addproduct person={{"title":"","product":"","category":"","image":"" }}/>} ></Route>
      </Routes>
    </>
  )
}

export default App
