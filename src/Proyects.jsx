import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import SvgIcons from "./assets/SvgIcon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Proyects.css";

export const Proyects = ({ lang, dayNigth }) => {
  const [masInfo, setmasInfo] = useState(false);

  useEffect(() => {
    console.log(lang);
  }, [lang]);

  return (
      <div>
        <h1 style={{marginTop:"15px"}} className={dayNigth === "Day" ? "h1" : "h1Nigth"}>
          {lang === "ENG" ? "Project" : "Proyecto"}
        </h1>
        <h2 className={dayNigth === "Day" ? "h2" : "h2Nigth"}>ERP-CRM-POS</h2>
        <p className={dayNigth === "Day" ? "p" : "pNigth"}>
          {lang === "ENG"
            ? "This system has been developed to optimize efficiency, maximize resource utilization, and improve communication with clients. Its custom design ensures it perfectly fits the specific needs of the company."
            : "Este sistema ha sido desarrollado a medida para la empresa con el objetivo de optimizar la eficiencia, maximizar el uso de recursos y mejorar la comunicación con los clientes. Su diseño personalizado garantiza que se ajuste perfectamente a las necesidades específicas de la empresa."}
        </p>
        <p
          className={dayNigth === "Day" ? "p" : "pNigth"}
          style={{ margin: "20px" }}
        >
          {lang === "ENG"
            ? "Currently, the system is in the testing phase within the company. I am committed to continuous improvement, making adjustments and daily evaluations to adapt the system to emerging requirements and ensure optimal performance. This testing phase is crucial to identify areas for improvement and ensure the system meets the expected quality standards."
            : "Actualmente, el sistema se encuentra en la fase de pruebas dentro de la empresa. Estoy comprometido con la mejora continua, realizando ajustes y evaluaciones diarias para adaptar el sistema a los requisitos emergentes y garantizar su rendimiento óptimo. Esta fase de testing es crucial para identificar áreas de mejora y asegurar que el sistema cumpla con los estándares de calidad esperados."}
        </p>
        {masInfo ? null : (
          <button className="styled-button" onClick={() => setmasInfo(true)}>
            {lang === "ENG" ? "More Information" : "Más Información"}
          </button>
        )}
        {masInfo && (
          <>
            <div className={dayNigth === "Day" ? "card" : "cardNigth"}>
              <h2>
                {lang === "ENG"
                  ? "Management System for Roller Blind Factory"
                  : "Sistema de Gestión para Fábrica de Cortinas Enrollables"}
              </h2>
              <p>
                {lang === "ENG"
                  ? "This system is designed for a company that manufactures custom roller blinds. Its main objective is to manage sales entry, calculate the necessary measurements to manufacture all parts of the blinds, and store this data in a database."
                  : "Este sistema está diseñado para una empresa que fabrica cortinas enrollables a medida. Su objetivo principal es gestionar el ingreso de ventas, calcular las medidas necesarias para fabricar todas las partes de las cortinas y almacenar estos datos en una base de datos."}
              </p>
            </div>
            <div className={dayNigth === "Day" ? "card" : "cardNigth"}>
              <h2>{lang === "ENG" ? "Features" : "Características"}</h2>
              <p>
                {lang === "ENG"
                  ? "Main: Sales Management: Allows the registration of new sales with all the necessary details, such as dimensions, type of fabric, and client specifications. Stores each sale in the database for easy access and tracking."
                  : "Principales: Gestión de Ventas: Permite el registro de nuevas ventas con todos los detalles necesarios, como las dimensiones, tipo de tela, y especificaciones del cliente. Almacena cada venta en la base de datos para un fácil acceso y seguimiento."}
              </p>
            </div>
            <Row>
              <Col>
                <div className={dayNigth === "Day" ? "card" : "cardNigth"}>
                  <h2>
                    {lang === "ENG"
                      ? "Measurement Calculation"
                      : "Cálculo de Medidas"}
                  </h2>
                  <p>
                    {lang === "ENG"
                      ? "Automatically calculates the necessary measurements for each part of the blinds, ensuring precision and efficiency in the manufacturing process. Generates a detailed breakdown of the parts to be manufactured for each sale."
                      : "Calcula automáticamente las medidas necesarias para cada parte de las cortinas, asegurando precisión y eficiencia en el proceso de fabricación. Genera un desglose detallado de las partes a fabricar para cada venta."}
                  </p>
                </div>
              </Col>
              <Col>
                <div className={dayNigth === "Day" ? "card" : "cardNigth"}>
                  <h2>
                    {lang === "ENG"
                      ? "Document Generation"
                      : "Generación de Documentos"}
                  </h2>
                  <p>
                    {lang === "ENG"
                      ? "Detailed PDFs: Automatically creates a PDF with all the sale data, including measurements and specifications. This PDF can be sent to different sections of the factory responsible for manufacturing the parts."
                      : "PDFs Detallados: Crea automáticamente un PDF con todos los datos de la venta, incluyendo las medidas y especificaciones. Este PDF puede ser enviado a las diferentes secciones de la fábrica responsables de la fabricación de las partes."}
                  </p>
                </div>
              </Col>
              <Col>
                <div className={dayNigth === "Day" ? "card" : "cardNigth"}>
                  <h2>
                    {lang === "ENG"
                      ? "Manufacturing Tickets"
                      : "Tickets de Fabricación"}
                  </h2>
                  <p>
                    {lang === "ENG"
                      ? "Generates tickets adapted for a ticket printer, which are attached to each blind. These tickets contain essential information to identify and manage each blind during the manufacturing and delivery process."
                      : "Genera tickets adaptados para una impresora de tickets, los cuales se pegan en cada cortina. Estos tickets contienen información esencial para identificar y gestionar cada cortina durante el proceso de fabricación y entrega."}
                  </p>
                </div>
              </Col>
            </Row>
            <div className={dayNigth === "Day" ? "card" : "cardNigth"}>
              <h2>
                {lang === "ENG"
                  ? "Improved User Experience"
                  : "Experiencia de Usuario Mejorada"}
              </h2>
              <p>
                {lang === "ENG"
                  ? "Stylized Forms and Tables: Centered and stylized forms for a better user experience. Data Visualization: Use of components such as React Bootstrap to improve data visualization and manipulation."
                  : "Formularios y Tablas Estilizadas: Formularios centrados y estilizados para una mejor experiencia de usuario. Visualización de Datos: Uso de componentes como React Bootstrap para mejorar la visualización y manipulación de datos."}
              </p>
            </div>
            <button className="styled-button" onClick={() => setmasInfo(false)}>
              {lang === "ENG" ? "Less Information" : "Menos Información"}
            </button>
          </>
        )}
        <h2 className={dayNigth === "Day" ? "h2" : "h2Nigth"} style={{ marginBottom: "20px" }}>
          {lang === "ENG" ? "Technologies" : "Tecnologías"}
        </h2>
        <SvgIcons language={lang} dayNigth={dayNigth} />
        <div className="carruselContainer">
            <Carousel className="carrusel" style={{ marginTop: "40px" }} data-bs-theme="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/Venta1.png"
                alt={lang === "ENG" ? "First slide" : "Primera diapositiva"}
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/Venta2.png"
                alt={lang === "ENG" ? "First slide" : "Primera diapositiva"}
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/Ventas.png"
                alt={lang === "ENG" ? "First slide" : "Primera diapositiva"}
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/Ventas2.png"
                alt={lang === "ENG" ? "First slide" : "Primera diapositiva"}
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/Clients.png"
                alt={lang === "ENG" ? "First slide" : "Primera diapositiva"}
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/Calendar.png"
                alt={lang === "ENG" ? "First slide" : "Primera diapositiva"}
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
      </div>
  );
};
