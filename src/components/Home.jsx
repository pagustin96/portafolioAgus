import '../styles/Home.css'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export const Home = () => {

    const el = useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [' desarrollador Full Stack', ' apasionado por el desarrollo web'],
            startDelay: 500,
            typeSpeed: 30,
            backDelay: 1500,
            backSpeed: 30,
            smartBackspace: true,
            showCursor: true,
            loop: true
        })
    },[])

  return (
    <div className='home-container'>
        <div className='overlay'>
        <h1 className='titulo-h1'>Soy Agustin Sanchez</h1>
        <p className='typewritter'>Soy <span  ref={el}></span></p>
        </div>
    </div> 
  )
} 
