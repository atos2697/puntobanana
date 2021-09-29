import "./App.css";

const Footer = () => {
  return (
    <div className="footer-grid">
      <a href="#home">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2Fimage%202.svg?alt=media&token=1d96d6d6-2dd2-4169-a396-bd159788745a"
          alt="Punto Banana"
          className="footer-img"
        />
      </a>
      <div className="footer-socials">
        <a
          href="https://www.facebook.com/puntobanana/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="navbar-circle ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FFace.svg?alt=media&token=4496e785-ee1e-4db3-b85d-0430def9fea3"
              alt="Facebook"
              className="navbar-icon-facebook footer-facebook"
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
              className="navbar-icon footer-whats"
            />
          </div>
        </a>
        <a href="http://m.me/puntobanana" target="_blank" rel="noreferrer">
          <div className="navbar-circle">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FMessenger.svg?alt=media&token=024d428c-d13a-452c-9b61-df3de679e0fa"
              alt="Messenger"
              className="navbar-icon footer-messenger"
            />
          </div>
        </a>
      </div>
      <div className="footer-options">
        <a href="#home">
          <p className="footer-option">Inicio</p>
        </a>
        <a
          href={
            window.matchMedia("(min-width: 600px)").matches
              ? "#servicios"
              : "#servicios2"
          }
        >
          <p className="footer-option">Desarrollos</p>
        </a>
        <a href="#desarrollos">
          <p className="footer-option">Servicios</p>
        </a>
        <a href="#cotizar">
          <p className="footer-option">Cotizar</p>
        </a>
      </div>
      <p className="footer-rights">© 2021 Punto Banana, All rights reserved</p>
    </div>
  );
};

export default Footer;
