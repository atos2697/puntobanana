import "./App.css";

const Desarrollos = () => {
  return (
    <div id="desarrollos">
      <div className="desarrollos-body">
        <h1 className="desarrollos-h1">
          Impulsa tu proyecto con <br /> nuestros servicios digitales
        </h1>
        <p className="desarrollos-p">
          Algunos de nuestros servicios:
          <br />{" "}
          <ul>
            <li>Tienda en línea</li>
            <li>Landing page</li>
            <li>Community managment</li>
            <li>Servicio de mailing</li>
            <li>Generación de leads vía Linkedin</li>
            <li>Analítica web</li>
            <li>CRMS / Bases de datos / Herramientas de gestón</li>
            <li>Chatbots</li>
          </ul>{" "}
          <a
            href="https://wa.me/+528120167803/?text=!Quiero más información sobre sus servicios digitales! 🍌"
            target="_blank"
            rel="noreferrer"
          >
            <span className="purple movil">Get started --></span>
          </a>
        </p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FRectangle%20233.svg?alt=media&token=d3bebe41-48eb-43f7-9617-457efafa49b3"
          alt="desarrollo web"
          className="desarrollos-img"
        />
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FGroup%2039.svg?alt=media&token=ebbcb7ff-9d64-4f84-85a4-3240b69dc549"
        alt="Banner de cotización"
        className="desarrollos-banner1"
        id="cotizar"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FGroup%2040.svg?alt=media&token=3dc3b5d3-42d0-46da-b64b-c69528fc2632"
        alt="banner de cotización"
        className="desarrollos-banner2"
        id="cotizar2"
      />
      <a
        href="https://wa.me/+528120167803/?text=!Quiero cotizar mi proyecto! 🍌"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2Fwhats-banner.svg?alt=media&token=c059a937-9eec-4f1e-933c-769cafbc0795"
          alt="whatsapp banner"
          className="banner-whats"
        />
      </a>
      <a href="http://m.me/puntobanana" target="_blank" rel="noreferrer">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2Fmessenger%20XD.svg?alt=media&token=ee2accba-4c55-495d-be96-6151703458c5"
          alt="messenger banner"
          className="banner-messenger"
        />
      </a>
    </div>
  );
};

export default Desarrollos;
