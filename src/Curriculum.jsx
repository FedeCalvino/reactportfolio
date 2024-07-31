import React from 'react'
import "./Curriculum.css"
export const Curriculum = ({lang}) => {
    console.log(lang)
  return (
    <>
    <div className='cvContainer'>
        {lang==="ENG" ? <img className='cv' src="/cvENG.png" height={1000} alt="ENG" />:
        <img className='cv' src="/cvESP.png" height={1000} alt="ESP" />}
    </div>
    </>
  )
}
