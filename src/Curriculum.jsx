import React from 'react'
import "./Curriculum.css"
export const Curriculum = ({lang}) => {
    console.log(lang)
  return (
    <>
    {lang==="ENG" ? <img className='cv' src="/cvENG.png" height={900} alt="ENG" />:
        <img className='cv' src="/cvESP.png" height={900} alt="ESP" />}
        
    </>
  )
}
