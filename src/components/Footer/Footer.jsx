import "./Footer.scss";
import { Link } from "react-router-dom";
import Logo from "./../../assets/img/airwav.png";

const Footer = () => {

  function handleScroll(){
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <>
      <div
        className="d-flex justify-content-around flex-wrap footer-container p-3"
        style={{
          backgroundColor: "black",
          position: "relative",
          bottom: "0",
          height: "35vh",
          width: "100vw",
          marginTop: "50vh",
        }}
      >
        <div className="col-lg-3 col-sm footer-column">
          <img src={Logo} alt="Logo de Airwav" className="logo" />
          <span className="logo-brand">Airwav</span>
          <div className="d-flex flex-column text-start mt-3">
            <p className="footer-text">Teléfono: +549 11 12345678</p>
            <p className="footer-text">Email: ventas@airwav.com</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm d-flex flex-column text-center footer-column">
          <Link className="link" to="/products/accesories" onClick={() => handleScroll()}>
            Accesorios
          </Link>
          <Link className="link" to="/products/amplifiers" onClick={() => handleScroll()}>
            Amplificadores
          </Link>
          <Link className="link" to="/products/instruments" onClick={() => handleScroll()}>
            Instrumentos
          </Link>
          <Link className="link" to="/products/pedals" onClick={() => handleScroll()}>
            Pedales
          </Link>
          <Link className="link" to="/products/production" onClick={() => handleScroll()}>
            Producción
          </Link>
        </div>
        <div className="col-lg-3 col-sm d-flex flex-column text-center footer-column">
          <Link className="link" to="/contacto" onClick={() => handleScroll()}>
            Contacto
          </Link>
          <Link className="link" to="/about" onClick={() => handleScroll()}>
            Quiénes Somos
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
