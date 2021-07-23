import './NavBar.scss';
import Logo from './../../assets/img/airwav.png';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import CartWidget from './../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" className="navbar" style={{position: 'sticky', top: '0', zIndex: '2'}}>
                <Link to="/" className="navbar-brand d-flex">
                    <img src={Logo} alt="Logo de Airwav" className="logo"/>
                    <Navbar.Brand className="logo-brand">Airwav</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto menu">
                        <NavDropdown title="Productos" id="basic-nav-dropdown" className="menu-dropdown menu-item">
                        <NavDropdown.Item as={Link} to="/products/accesories" className="menu-dropdown-item">Accesorios</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/products/amplifiers" className="menu-dropdown-item">Amplificadores</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/products/instruments" className="menu-dropdown-item">Instrumentos</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/products/pedals" className="menu-dropdown-item">Pedales</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/products/production" className="menu-dropdown-item">Producción</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/" className="menu-dropdown-item">Todos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/contact" className="menu-item">
                            Contacto
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className="menu-item">
                            Quiénes somos
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