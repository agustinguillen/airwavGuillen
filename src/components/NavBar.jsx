import './NavBar.scss';
import Logo from './../assets/img/airwav.png';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

function NavBar(){
    return (
        <Navbar bg="light" expand="lg" className="navbar">
            <img src={Logo} alt="Logo de Airwav" className="logo"></img>
            <Navbar.Brand href="#home" className="logo-brand">Airwav</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto menu">
                <NavDropdown title="Productos" id="basic-nav-dropdown" className="menu-item menu-dropdown">
                <NavDropdown.Item href="#action/3.1" className="menu-dropdown-item">Accesorios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="menu-dropdown-item">Amplificadores</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="menu-dropdown-item">Controladores</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="menu-dropdown-item">Instrumentos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="menu-dropdown-item">Micrófonos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="menu-dropdown-item">Monitores</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="menu-dropdown-item">Pedales</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="menu-dropdown-item">Placas de Audio</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home" className="menu-item">Contacto</Nav.Link>
                <Nav.Link href="#link" className="menu-item">Quiénes somos</Nav.Link>
            </Nav>
            <Button variant="warning" className="btn-menu btn-shoppingCart"><FaShoppingCart /></Button>
            <Button variant="dark" className="btn-menu btn-register">Registrate</Button>
            <Button variant="outline-warning" className="btn-menu btn-login">Iniciar Sesión</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;