import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import NetworkTraffic from "./components/NetworkTraffic/NetworkTraffic";

const LandingPage = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const section8Ref = useRef(null);
  const section9Ref = useRef(null);
  const section10Ref = useRef(null);
  const section11Ref = useRef(null);
  const section12Ref = useRef(null);
  const section13Ref = useRef(null);
  const videoRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const baseVideoUrl =
    "https://www.youtube.com/embed/6tlSx0jkuLM?si=tCvHqbuznGg6PLH9?rel=0&mute=1";

  const videoSrc = isVisible ? `${baseVideoUrl}&autoplay=1` : baseVideoUrl;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    if (section11Ref.current) observer.observe(section11Ref.current);

    return () => {
      if (section11Ref.current) observer.unobserve(section11Ref.current);
    };
  }, [section11Ref]);

  const scrollToSection = (ref) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-container">
      <section ref={section1Ref} className="section dark-section">
        <div className="content">
          <h2>El viaje de los datos a través de Internet</h2>
          <h3>Un recorrido visual por las capas del modelo TCP/IP.</h3>
          <p>
            El objetivo es que podamos seguir el recorrido de los datos a través
            de este popular modelo, tomando como ejemplo un caso de uso muy
            común: un usuario que recibe un video de Youtube y abre el link para
            poder visualizarlo
          </p>

          <button onClick={() => scrollToSection(section2Ref)}>
            ¡Empecemos!
          </button>
          {/* Loop de NetworkTraffic ajustado */}
        </div>
      </section>

      {/* Sección 2 */}
      <section ref={section2Ref} className="section light-section">
        <div className="content">
          <h2>Viaje de Ida 📤</h2>
          <h3>
            Primero vamos a ver el recorrido de la Petición desde la capa mas
            externa, es decir, la Capa de Aplicación hacia la mas interna del
            modelo, es decir, la Capa de Acceso a la Red
          </h3>
          <div className="navigation-buttons">
            <button onClick={() => scrollToSection(section3Ref)}>
              ¡Vamos al primer paso!
            </button>
          </div>
        </div>
      </section>

      {/* Sección 3 */}
      <section ref={section3Ref} className="section dark-section">
        <div className="content">
          <h2>Capa de Aplicación 👩‍💻</h2>
          <h3>
            Aquí es donde se interactúa con el usuario. Protocolos como HTTP y
            FTP transforman los datos en formatos comprensibles.
          </h3>
          <p>
            Un usuario recibe un enlace de YouTube. Al tocar el enlace, la
            aplicación de WhatsApp (que actúa como un navegador en este caso)
            envía una petición al servidor de YouTube.
          </p>
          <div className="navigation-buttons">
            <button onClick={() => scrollToSection(section2Ref)}>Volver</button>
            <button onClick={() => scrollToSection(section4Ref)}>
              Siguiente punto
            </button>
          </div>
        </div>
      </section>

      {/* Sección 4 */}
      <section ref={section4Ref} className="section light-section">
        <div className="content">
          <h2>Capa de Transporte 📦</h2>
          <h3>
            Los datos se dividen en segmentos. Aquí se asegura la entrega
            confiable con TCP o una entrega más rápida con UDP.
          </h3>
          <p>
            El sistema operativo del celular, a través del protocolo TCP, toma
            esa petición y la divide en segmentos. A cada segmento le pone un
            número para que no se pierda en el camino y se asegure que el
            mensaje llegará completo. Es como si en un correo postal el cartero
            numerara las páginas de una carta.
          </p>
          <div className="navigation-buttons">
            <button onClick={() => scrollToSection(section3Ref)}>Volver</button>
            <button onClick={() => scrollToSection(section5Ref)}>
              Siguiente punto
            </button>
          </div>
        </div>
      </section>

      {/* Sección 5 */}
      <section ref={section5Ref} className="section dark-section">
        <div className="content">
          <h2>Capa de Internet 🌍</h2>
          <h3>
            Se asignan las direcciones IP. Los paquetes de datos viajan a través
            de enrutadores para encontrar su destino.
          </h3>
          <p>
            El protocolo IP toma los segmentos y les añade las direcciones del
            celular (dirección IP de origen) y del servidor de YouTube
            (dirección IP de destino). Siguiendo el ejemplo del correo postal,
            la empresa de correos se asegura de que el paquete sepa a dónde va y
            de dónde viene.
          </p>
          <div className="navigation-buttons">
            <button onClick={() => scrollToSection(section4Ref)}>Volver</button>
            <button onClick={() => scrollToSection(section6Ref)}>
              Siguiente punto
            </button>
          </div>
        </div>
      </section>

      {/* Sección 6 */}
      <section ref={section6Ref} className="section light-section">
        <div className="content">
          <h2>Capa de Acceso a la Red 📡</h2>
          <h3>
            Es la capa más baja y la que maneja la interacción con la
            infraestructura física de la red.
          </h3>
          <p>
            El paquete viaja por la red (Wi-Fi de tu casa o datos móviles) hasta
            llegar al servidor de YouTube.
          </p>
          <div className="navigation-buttons">
            <button onClick={() => scrollToSection(section5Ref)}>Volver</button>
            <button onClick={() => scrollToSection(section7Ref)}>
              Siguiente punto
            </button>
          </div>
        </div>
      </section>

      {/* Sección 7 */}
      <section ref={section7Ref} className="section dark-section">
        <div className="content">
          <h2>Viaje de Vuelta 📥</h2>
          <h3>
            Ahora vamos a ver el recorrido de la Respuesta desde la capa mas
            interna, es decir, la Capa de Acceso a la Red hacia la mas externa
            del modelo, es decir, la Capa de Aplicación donde el usuario lo
            recibirá
          </h3>
          <div className="navigation-buttons">
            <button onClick={() => scrollToSection(section6Ref)}>Volver</button>
            <button onClick={() => scrollToSection(section8Ref)}>
              Siguiente punto
            </button>
          </div>
        </div>
      </section>

      {/* Sección 8 */}
      <section ref={section8Ref} className="section light-section">
        <div className="content">
          <h2>Capa de Acceso a la Red 📡</h2>
          <p>El paquete llega al servidor de YouTube a través de la red.</p>
          <div className="navigation-buttons">
            <button onClick={() => scrollToSection(section7Ref)}>Volver</button>
            <button onClick={() => scrollToSection(section9Ref)}>
              Siguiente punto
            </button>
          </div>
        </div>
      </section>

      {/* Sección 9 */}
      <section ref={section9Ref} className="section dark-section">
        <div className="content">
          <h2>Capa de Internet 🌍</h2>
          <p>
            El servidor recibe el paquete y se da cuenta, gracias a la dirección
            IP, de que el paquete es para él. El protocolo IP se encarga de
            recibirlo.
          </p>
          <div className="navigation-buttons">
            <button onClick={() => scrollToSection(section8Ref)}>Volver</button>
            <button onClick={() => scrollToSection(section10Ref)}>
              Siguiente punto
            </button>
          </div>
        </div>
      </section>

      {/* Sección 10 */}
      <section ref={section10Ref} className="section light-section">
        <div className="content">
          <h2>Capa de Transporte 📦</h2>
          <p>
            El servidor de YouTube, usando el protocolo TCP, lee los segmentos
            de la petición, los reordena y confirma que el pedido está completo.
            Luego, genera una respuesta con los segmentos del video que te va a
            enviar. Y para cada segmento que envía, espera que el celular le dé
            una confirmación de que lo recibió correctamente.
          </p>
          <div className="navigation-buttons">
            <button onClick={() => scrollToSection(section9Ref)}>Volver</button>
            <button onClick={() => scrollToSection(section11Ref)}>
              Siguiente punto
            </button>
          </div>
        </div>
      </section>

      {/* Sección 11 */}
      <section ref={section11Ref} className="section dark-section">
        <div className="content">
          <h2>Capa de Aplicación 👩‍💻</h2>
          <p>
            El video viaja de vuelta, y el celular lo reensambla y lo reproduce
            en la pantalla. WhatsApp le pasa el video al reproductor interno del
            celular para que lo puedas ver. El video se ve fluido gracias a que
            el protocolo TCP aseguró que todos los paquetes llegaron en orden.
          </p>
          <div className="video-limiter">
            <div className="video-container">
              <iframe
                ref={videoRef}
                width="560"
                height="315"
                src={videoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="navigation-buttons">
            <button onClick={() => scrollToSection(section10Ref)}>
              Volver
            </button>
            <button onClick={() => scrollToSection(section12Ref)}>
              Siguiente punto
            </button>
          </div>
        </div>
      </section>

      <section ref={section12Ref} className="section light-section">
        <div className="content">
          <h2>Simulación de transferencia de datos por una red [Canva]</h2>
          <div className="network-traffic-container">
            <NetworkTraffic />
          </div>
          <button onClick={() => scrollToSection(section1Ref)}>
            ¡Volver al inicio!
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
