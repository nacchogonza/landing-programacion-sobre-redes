import React, { useRef } from 'react';
import './App.css';

const LandingPage = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-container">
      {/* Sección 1: Introducción */}
      <section ref={section1Ref} className="section dark-section">
        <div className="content">
          <h2>El viaje de los datos a través de Internet</h2>
          <p>Un recorrido visual por las capas del modelo TCP/IP.</p>
          <p>El objetivo es que podamos seguir el recorrido de los datos a través de este popular modelo, tomando como ejemplo un caso de uso muy común: un usuario que recibe un video de Youtube y abre el link para visualizarlo</p>
          <button onClick={() => scrollToSection(section2Ref)}>
            Empezar el viaje
          </button>
        </div>
      </section>

      {/* Sección 2: Capa de Aplicación */}
      <section ref={section2Ref} className="section light-section">
        <div className="content">
          <h2>Capa de Aplicación</h2>
          <p>
            Aquí es donde se interactúa con el usuario. Protocolos como HTTP y
            FTP transforman los datos en formatos comprensibles.
          </p>
          <div className="navigation-buttons">
            <button onClick={() => scrollToSection(section1Ref)}>
              Volver
            </button>
            <button onClick={() => scrollToSection(section3Ref)}>
              Siguiente punto
            </button>
          </div>
        </div>
      </section>

      {/* Sección 3: Capa de Transporte */}
      <section ref={section3Ref} className="section dark-section">
        <div className="content">
          <h2>Capa de Transporte</h2>
          <p>
            Los datos se dividen en segmentos. Aquí se asegura la entrega
            confiable con TCP o una entrega más rápida con UDP.
          </p>
          <div className="navigation-buttons">
            <button onClick={() => scrollToSection(section2Ref)}>
              Volver
            </button>
            <button onClick={() => scrollToSection(section4Ref)}>
              Siguiente punto
            </button>
          </div>
        </div>
      </section>

      {/* Sección 4: Capa de Internet */}
      <section ref={section4Ref} className="section light-section">
        <div className="content">
          <h2>Capa de Internet</h2>
          <p>
            Se asignan las direcciones IP. Los paquetes de datos viajan a través
            de enrutadores para encontrar su destino.
          </p>
          <div className="navigation-buttons">
            <button onClick={() => scrollToSection(section3Ref)}>
              Volver
            </button>
            <button>¡Finalizar!</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;