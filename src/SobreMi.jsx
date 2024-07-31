import React, { useEffect, useState } from "react";
import "./SobreMi.css";
export const SobreMi = ({ lang,dayNigth }) => {
  const [Text, setText] = useState("");
  const [Boton, setBoton] = useState(null);

  useEffect(() => {
    UpdateText(Boton);
  }, [lang]);

  useEffect(() => {
    ShowText(3);
  }, []);

  const UpdateText = (button) => {
    switch (button) {
      case 1:
        {
          lang === "ENG"
            ? setText(
                "In my free time, I often go to the gym and exercise at least once a day. I am also very passionate about music, I like to do everything well and without rushing. On the other hand, my main goal in life is to visit as many places in the world as I can. I love experiencing different cultures and places that help me understand how vast the planet is and the multitude of people and customs that exist"
              )
            : setText(
                "En mi tiempo libre suelo ir mucho al gimnasio y hacer deporte por lo menos 1 vez al dia, tambien me apasiona mucho la musica. Todo lo que hago me gusta hacerlo bien y sin apuro.Por otro lado mi objetivo principal en la vida es poder conocer la mayor cantidad de lugares en el mundo que pueda, me encanta poder ver otras culturas y lugares que me hagan entender lo grande que es el planeta y la cantidad de personas y costumbres que existen"
              );
        }
        break;
      case 2:
        {
          lang === "ENG"
            ? setText(
                "I am currently working on my final project at ORT University in Uruguay, pursuing a degree as an Information Technology Analyst. I have also received training from other academies such as CoderHouse and DigitalHouse, which have greatly helped me develop the project I am working on"
              )
            : setText(
                "Actualmente estoy realizando el proyecto final de carrera en la universidad ORT Uruguay en la carrera Analista en technologias de la informacion y cuento con formacion en otras academias como coderHouse o DigitalHouse los cuales me ayudaron mucho a poder desarrollar el proyecto en el cual estoy trabajando"
              );
        }
        break;
      case 3:
        {
          lang === "ENG"
            ? setText(
                "I started studying programming in 2020 after leaving my electronics engineering degree because it wasn't what I wanted to pursue. However, during that degree, we did some programming, and I loved it. That's when I decided to focus 100% on Development"
              )
            : setText(
                "Comence a estudiar programacion en el 2020 luego de dejar la carrera de ingenieria en electronica ya que no era a lo que me queria dedicar pero dentro de esa carrera vimos un poco de programacion y me encanto, fue ahi donde decidi enfocarme 100% en el Desarrollo"
              );
        }
        break;
    }
  };

  const ShowText = (button) => {
    if (button === Boton) {
      setText("");
      setBoton(null);
    } else {
      setBoton(button);
      switch (button) {
        case 1:
          {
            lang === "ENG"
              ? setText(
                  "In my free time, I often go to the gym and exercise at least once a day. I am also very passionate about music, I like to do everything well and without rushing. On the other hand, my main goal in life is to visit as many places in the world as I can. I love experiencing different cultures and places that help me understand how vast the planet is and the multitude of people and customs that exist"
                )
              : setText(
                  "En mi tiempo libre, suelo ir al gimnasio y practicar deporte al menos una vez al día. También me apasiona la música y estoy formándome para poder tocar en diferentes lugares. Todo lo que hago, lo realizo con dedicación y sin apuro. Mi objetivo principal en la vida es conocer la mayor cantidad de lugares posibles en el mundo. Me encanta descubrir otras culturas y lugares que me permitan comprender lo vasto que es el planeta y la diversidad de personas y costumbres que existen"
                );
          }
          break;
        case 2:
          {
            lang === "ENG"
              ? setText(
                  "I am currently working on my final project at ORT University in Uruguay, pursuing a degree as an Information Technology Analyst. I have also received training from other academies such as CoderHouse and DigitalHouse, which have greatly helped me develop the project I am working on"
                )
              : setText(
                  "Actualmente estoy realizando el proyecto final de carrera en la universidad ORT Uruguay en la carrera Analista en technologias de la informacion y cuento con formacion en otras academias como coderHouse o DigitalHouse los cuales me ayudaron mucho a poder desarrollar el proyecto en el cual estoy trabajando"
                );
          }
          break;
        case 3:
          {
            lang === "ENG"
              ? setText(
                  "I started studying programming in 2020 after leaving my electronics engineering degree because it wasn't what I wanted to pursue. However, during that degree, we did some programming, and I loved it. That's when I decided to focus 100% on Development"
                )
              : setText(
                  "Comence a estudiar programacion en el 2020 luego de dejar la carrera de ingenieria en electronica ya que no era a lo que me queria dedicar pero dentro de esa carrera vimos un poco de programacion y me encanto, fue ahi donde decidi enfocarme 100% en el Desarrollo"
                );
          }
          break;
      }
    }
  };
  return (
    <>
      <div className={dayNigth==="Day" ? "info":"infoNigth"}>
        <img src="/Yo.jpg" alt="MiImage" className="profile-image" />
        <div className={dayNigth==="Day" ? "text":"textNigth"}>
          <div className="link">
            <a
              href="https://www.linkedin.com/in/federico-calvino/"
              target="_blank"
              className={dayNigth==="Day" ? "link-animation":"link-animationNigth"}
              style={{
                textDecoration: "none",
                fontFamily: "sans-serif",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "40px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#3498db";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.color = "#3498db";
              }}
            >
              {lang === "ENG"
                ? "I am available to work"
                : "Disponible para trabajar"}
            </a>
          </div>
          <h1 className="h1">

            {lang === "ENG" ? "Hey! I'm Federico" : "Hey! soy Federico"}

          </h1>
          <p style={{ marginBottom: "20px", fontFamily: "sans-serif" }}>
            {lang === "ENG"
              ? "Information Technology Analyst from Montevideo, Uruguay 🇺🇾. Specialized in web application development"
              : "Analista en Technologias de la Informacion de Montevideo, Uruguay 🇺🇾. Especializado en el desarrollo de aplicaciones web."}
          </p>
          <button className={Boton===3 ? "styled-button-active": "styled-button"} onClick={() => ShowText(3)}>
            {lang === "ENG" ? "Beginnings" : "Comienzos"}
          </button>
          <button className={Boton===2 ? "styled-button-active": "styled-button"} onClick={() => ShowText(2)}>
            {lang === "ENG" ? "Present" : "Actualidad"}
          </button>
          <button className={Boton===1 ? "styled-button-active": "styled-button"} onClick={() => ShowText(1)}>
            Hobbies
          </button>
        </div>
      </div>
      <div style={{ fontFamily: "sans-serif" }} className={dayNigth==="Day" ? "showText":"showTextNigth"} >
        {Text && Text}
      </div>
    </>
  );
};
