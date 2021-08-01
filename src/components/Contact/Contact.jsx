import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="text-center mt-3">
      <div className="container about-container text-center mt-3">
        <h3 className="mb-5">Contacto</h3>
        <div className="row">
          <div className="col-lg-6 col-md">
            <h5>Redes Sociales</h5>
            <FaFacebook className="mx-3" size={30} />
            <FaInstagram className="mx-3" size={30} />
            <h5 className="mt-5">Email</h5>
            <FaEnvelope size={20} />
            <span className="mx-3">ventas@airwav.com</span>
            <h5 className="mt-5">Teléfono</h5>
            <FaPhoneAlt size={20} />
            <span className="mx-3">+549 11 12345678</span>
          </div>
          <div className="col-lg-6 col-md">
            <h5>Ubicación</h5>
            <p>Calle 50 999 La Plata, Buenos Aires, Argentina</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13085.471030191491!2d-57.9579431657252!3d-34.92231268761923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62d93249f6d%3A0x571a207a89cff822!2sCalle%2050%20999%2C%20B1900ATM%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1627755876569!5m2!1ses!2sar"
              width="400"
              height="250"
              style={{ border: "0" }}
              allowFullScreen={false}
              loading="lazy"
              title="ubication"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
