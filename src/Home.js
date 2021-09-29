import "./App.css";
import React, { useState, useEffect } from "react";
import Servicios from "./Servicios";
import Desarrollos from "./Desarrollos";
import Footer from "./Footer";

const Home = () => {
  const [result, setResult] = useState("");
  const [mode, setMode] = useState(0);

  useEffect(() => {
    const text = ["Tienda Online", "App Móvil", "Landing Page"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    const typing = () => {
      if (count === text.length) {
        count = 0;
      }

      currentText = text[count];
      letter = currentText.slice(0, ++index);

      if (letter.length === currentText.length) {
        setTimeout(function () {
          typing();
          setMode(count);
        }, 2500);
        index = 0;
        count++;
      } else {
        setTimeout(typing, 110);
      }
      setResult(letter);
    };

    typing();
  }, []);

  return (
    <div>
      <div id="home" className="home-body">
        <div className="home-left">
          <h1 className="home-h1">
            <strong>
              ¿Necesitas una <br /> <span className="typing">{result}</span> ?
            </strong>
          </h1>
          <p className="home-p">
            Tu sitio es la tarjeta de presentación de tu negocio. <br /> ¡Genera
            una impresión positiva en tus clientes!
          </p>
          <a
            href={
              window.matchMedia("(min-width: 600px)").matches
                ? "#servicios"
                : "#servicios2"
            }
          >
            <button className="home-button">
              <span className="home-button-text">Más información</span>
            </button>
          </a>
        </div>
        <div className="home-right">
          <img
            className="home-img-circle"
            src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FCircle.svg?alt=media&token=5fd2e35d-6149-4017-9195-60727a8db8ae"
            alt="circle"
          />
          <img
            className={mode === 0 ? "home-img-dashboard ecommerce" : "inactive"}
            src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FWeb%20Preview.svg?alt=media&token=a8107509-8cac-4fbb-8f7d-ce51be79aa59"
            alt="dashboard"
          />
          <img
            className={mode === 0 ? "home-img-payment" : "inactive"}
            src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FPayment.svg?alt=media&token=ca61dee8-c055-46de-90f2-237f86e3f0d3"
            alt="payment"
          />
          <img
            className={mode === 1 ? "home-img-dashboard app" : "inactive"}
            src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FiPhone%20X.svg?alt=media&token=c127571c-a176-433d-a030-2ca3584a6d80"
            alt="dashboard"
          />
          <img
            className={mode === 2 ? "home-img-dashboard landing" : "inactive"}
            src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FWebpage.svg?alt=media&token=04d38f2b-55b2-4f6d-8d77-5da4da981ff5"
            alt="dashboard"
          />
          <img
            className="home-img-dots-1"
            src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FDots.svg?alt=media&token=4bbf049f-11e2-43d8-a355-84fda84fa40e"
            alt="dots"
          />
          <img
            className="home-img-dots-2"
            src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FDots.svg?alt=media&token=4bbf049f-11e2-43d8-a355-84fda84fa40e"
            alt="dots"
          />
          <img
            className="home-img-dots-3"
            src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FDots.svg?alt=media&token=4bbf049f-11e2-43d8-a355-84fda84fa40e"
            alt="dots"
          />
          <img
            className="home-img-dots-4"
            src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FDots.svg?alt=media&token=4bbf049f-11e2-43d8-a355-84fda84fa40e"
            alt="dots"
          />
        </div>
      </div>
      <Servicios />
      <Desarrollos />
      <Footer />
    </div>
  );
};

export default Home;
