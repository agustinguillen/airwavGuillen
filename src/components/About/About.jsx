import Logo from "./../../assets/img/airwav.png";
import './About.scss'
import { FaRegCreditCard, FaTruckMoving, FaLock } from 'react-icons/fa';

function About() {
    return (
        <div className="container about-container text-center mt-3">
            <h3 className="mb-5">Quiénes somos</h3>
            <div className="row">
                <div className="col-lg-6 col-md photo-container">
                    <img 
                    src="https://res.cloudinary.com/vaporbox/image/upload/v1627749945/airwav/Musical-Store_jz1xmn.jpg" 
                    alt="Fotografía del local comercial"
                    />
                </div>
                <div className="col-lg-6 col-md description-container">
                    <img src={Logo} alt="Logo de Airwav" className="logo" />
                    <span className="brand">
                        Airwav
                    </span>
                    <div className="mt-3">
                        <p align="left">
                            Somos una empresa de la Ciudad de La Plata con 10 años de experiencia 
                            dedicada a la venta de instrumentos musicales. Airwav nació en el año 2011
                            en la ciudad de La Plata, creada por musicos de basta experiancia en el rubro.
                            Tenemos vendedores capacitados y atentos a las necesidades e intereses de nuestros
                            clientes.
                        </p>
                        <p align="left">
                            Contamos con un amplio local/showroom en calle 50 Nro 999
                            de la ciudad de La Plata donde podes probar y elegir en forma personal los productos
                            de nuestro catálogo con marcas de primer nivel, así también como variedad de precios.
                            No dudes en consultarnos lo que quieras, estamos a tu dispocicion siempre. 
                            Mandanos mail a ventas@airwav.com y sera respondido en un corto plazo.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt-5 d-flex flex-wrap justify-content-around text-center">
                <span>
                    <FaRegCreditCard name="credit" size={50} />
                    <div className="d-flex flex-wrap">
                        <label>Pagos hasta en 12 cuotas</label>
                    </div>
                </span>
                <span>
                    <FaTruckMoving name="shipping" size={50} />
                    <div className="d-flex flex-wrap">
                        <label>Envíos a todo el país</label>
                    </div>
                </span>
                <span>
                    <FaLock name="security" size={50} />
                    <div className="d-flex flex-wrap">
                        <label>Sitio seguro</label>    
                    </div>     
                </span>
            </div>
        </div>
    )
}

export default About;