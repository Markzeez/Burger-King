import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Hero'
import HeadlineCard from './Components/HeadlineCard'
import Food from './Food'
import Category from './Components/Category'
import Search from './Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''> 
     <Navbar/>
     <Hero/>
     <HeadlineCard/>  
     <Food/>
     <Category/>
     {/* <Search/> */}
    </div>
  )
}

export default App
