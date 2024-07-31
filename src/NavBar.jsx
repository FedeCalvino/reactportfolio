import React, { useState } from 'react'
import "./NavBar.css"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const NavBar = ({CallBackProyect,CallBackSobreMi,CallBackCv,CallBackLang,CallBackDayNigth}) => {

  const [Lang, setLang] = useState("");
  const [DayNigth, setDayNigth] = useState("Day");
  return (
    <div className='nav'>
          <div className='name'>
            <a onClick={CallBackSobreMi}>Federico Calviño</a>
          </div>
          <div className='lenguaje'>
            <img style={{marginTop:"2px"}} src="/lenguaje.png" alt="" />
            <ButtonGroup style={{marginLeft:"10px"}} aria-label="Basic example">
              <Button onClick={()=>{CallBackLang("ESP"),setLang("ESP")}} variant= {Lang!=="ENG" ? "primary":"secondary"}>ESP</Button>
              <Button onClick={()=>{CallBackLang("ENG"),setLang("ENG")}} variant= {Lang!=="ENG" ? "secondary":"primary"}>ENG</Button>
            </ButtonGroup>
          </div>
          <div className='iconDN'>
          {DayNigth==="Day" ? <img onClick={()=>{CallBackDayNigth("Nigth"),setDayNigth("Nigth")}} className='iconMoonDay' height={40} width={40} src="/moon.png" alt="" />:  <img className='iconMoonDay' onClick={()=>{CallBackDayNigth("Day"),setDayNigth("Day")}} height={45} width={45} src="/sun.png" alt="" />}
          </div>
        <div className='navLinks'>
          <a  onClick={CallBackCv}>{Lang==="ENG" ? "Resume" : "Curriculum"}</a>
          <p>|</p>
          <a onClick={CallBackProyect}>{Lang==="ENG" ? "Project" : "Proyecto"}</a>
          <p>|</p>
          <a onClick={CallBackSobreMi}>{Lang==="ENG" ? "About me" :  "Sobre Mi"}</a>
        </div>
    </div>
  );
}
