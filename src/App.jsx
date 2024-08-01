import { useState } from 'react'
import './App.css'
import { NavBar } from './NavBar'
import { SobreMi } from './SobreMi'
import { Proyects } from './Proyects'
import { Curriculum } from './Curriculum'


function App() {

  const [sobreMiBool, setSobreMiBool] = useState(true);
  const [proyectosBool, setproyectosBool] = useState(false);
  const [CVBool, setCVBool] = useState(false);
  const [Lang, setLang] = useState("");
  const [DayNight, setDayNight] = useState("Nigth");

  const handleProyects = () => {
    setproyectosBool(true);
    setSobreMiBool(false);
    setCVBool(false);
  };

  const handleCv = () => {
    setproyectosBool(false);
    setSobreMiBool(false);
    setCVBool(true);
  };

  const handleShowSobreMi = () => {
    setproyectosBool(false);
    setSobreMiBool(true);
    setCVBool(false);
  };

  const handleLang = (lang) => {
    setLang(lang);
    console.log(lang)
  };

  const handleDayNigth = (DayNigth) => {
    setDayNight(DayNigth)
    console.log(DayNigth)
  }

  return (
    <div className={`${DayNight} AppContainer`}>
      <NavBar 
        CallBackProyect={handleProyects} 
        CallBackSobreMi={handleShowSobreMi} 
        CallBackCv={handleCv}
        CallBackLang={handleLang}
        CallBackDayNigth={handleDayNigth}
      />
      {CVBool && <Curriculum lang={Lang}/>}
      {sobreMiBool && <SobreMi lang={Lang} dayNigth={DayNight}/>}
      {proyectosBool && <Proyects lang={Lang} dayNigth={DayNight}/>}
    </div>
  );
}

export default App;