import "./App.css";
import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="navbar">
        <div className={toggle ? "navbar-web active" : "navbar-web"}>
          <ul className="menu-ul">
            <a href="#home">
              <li
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="menu-li"
              >
                Inicio
              </li>
            </a>
            <a href="#servicios2">
              <li
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="menu-li"
              >
                Desarrollos
              </li>
            </a>
            <a href="#desarrollos">
              <li
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="menu-li"
              >
                Servicios
              </li>
            </a>
            <a href="#cotizar2">
              <li
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="menu-li"
              >
                Cotizar
              </li>
            </a>
          </ul>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FMenu.svg?alt=media&token=1e7aae0c-5b86-48cf-9168-6fba66c96390"
          alt="Menu"
          className="navbar-menu"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        <a href="#home">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2Fimage%202.svg?alt=media&token=1d96d6d6-2dd2-4169-a396-bd159788745a"
            alt="logo"
            className="navbar-logo"
          />
        </a>
        <a href="#home">
          <p className="navbar-options">Inicio</p>
        </a>
        <a href="#servicios">
          <p className="navbar-options">Desarrollos</p>
        </a>
        <a href="#desarrollos">
          <p className="navbar-options">Servicios</p>
        </a>
        <a href="#cotizar">
          <p className="navbar-options">Cotizar</p>
        </a>
        <a
          href="https://www.facebook.com/puntobanana/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="navbar-circle navbar-facebook">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FFace.svg?alt=media&token=4496e785-ee1e-4db3-b85d-0430def9fea3"
              alt="Facebook"
              className="navbar-icon navbar-icon-facebook"
            />
          </div>
        </a>
        <a
          href="https://wa.me/+528120167803/?text=!Quiero crear mi sitio web! 🍌"
          target="_blank"
          rel="noreferrer"
        >
          <div className="navbar-circle">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2Fwhats.svg?alt=media&token=85ec7866-a4ec-4d3b-872c-339d06ef6d91"
              alt="Whatsapp"
              className="navbar-icon"
            />
          </div>
        </a>
        <a href="http://m.me/puntobanana" target="_blank" rel="noreferrer">
          <div className="navbar-circle">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FMessenger.svg?alt=media&token=024d428c-d13a-452c-9b61-df3de679e0fa"
              alt="Messenger"
              className="navbar-icon"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
