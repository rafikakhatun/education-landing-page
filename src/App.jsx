import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
   useEffect(() => {
    Aos.init({ duration: 1000 }); // animation duration 1000ms
  }, []);


  return (
    <>
      
    </>
  )
}

export default App
