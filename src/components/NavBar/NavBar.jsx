import './NavBar.scss';
import Logo from './../../assets/img/airwav.png';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import CartWidget from './../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" className="navbar">
                <Link to="/">
                    <img src={Logo} alt="Logo de Airwav" className="logo"/>
                    <Navbar.Brand href="#home" className="logo-brand">Airwav</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto menu">
                    <NavDropdown title="Productos" id="basic-nav-dropdown" className="menu-dropdown menu-item">
                    <NavDropdown.Item href="#action/3.1" className="menu-dropdown-item">Accesorios</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className="menu-dropdown-item">Amplificadores</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className="menu-dropdown-item">Controladores</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="menu-dropdown-item">Instrumentos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className="menu-dropdown-item">Micrófonos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className="menu-dropdown-item">Monitores</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className="menu-dropdown-item">Pedales</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className="menu-dropdown-item">Placas de Audio</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="menu-item">
                        <Link to="/contact" className="menu-item-link">
                        Contacto
                        </Link>
                    </Nav.Link>
                    <Nav.Link className="menu-item">
                        <Link to="/about" className="menu-item-link">
                        Quiénes somos
                        </Link>
                    </Nav.Link>
                </Nav>
                <CartWidget />
                <Button variant="dark" className="btn-menu btn-register">Registrate</Button>
                <Button variant="outline-warning" className="btn-menu btn-login">Iniciar Sesión</Button>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar;