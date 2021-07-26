import "./NavBar.scss";
import Logo from "./../../assets/img/airwav.png";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import CartWidget from "./../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { googleProvider } from "../../authentication/authMethod";
import userAuth from "../../authentication/auth";
import UserUI from "../UserUI/UserUI";
import { useState, useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import firebase, { db } from "../../Firebase";

const NavBar = () => {
  const userSession = JSON.parse(localStorage.getItem("session"));
  const { cartItems, totalItems } = useContext(CartContext);
  const [user, setUser] = useState(userSession || "");

  const handleAuthentication = async (provider) => {
    const res = await userAuth(provider);
    let newUser = {
      name: res.displayName,
      email: res.email,
      emailVerified: res.emailVerified,
      image: res.photoURL,
      phone: res.phoneNumber,
      cart: { cartItems: cartItems, totalItems: totalItems },
    };
    setUser(newUser);
    saveUser(newUser);
    localStorage.setItem("session", JSON.stringify(newUser));
  };

  const saveUser = async (user) => {
    let doc = await db.collection("users").doc();
    doc
      .set({
        ...user,
        id: doc.id,
        created: firebase.firestore.Timestamp.fromDate(new Date())
      })
      .then(() => {
        setUser({...user, id: doc.id})
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  const logOut = () =>{
    db.collection('users').doc(user.id).update({
      "cart": {cartItems, totalItems}
    })
    .then(()=>{
      localStorage.clear()
      setUser("")
    })
    .catch((err)=>{
      console.error(err)
    })
  }

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className="navbar"
        style={{ position: "sticky", top: "0", zIndex: "2" }}
      >
        <Link to="/" className="navbar-brand d-flex">
          <img src={Logo} alt="Logo de Airwav" className="logo" />
          <Navbar.Brand className="logo-brand">Airwav</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto menu">
            <NavDropdown
              title="Productos"
              id="basic-nav-dropdown"
              className="menu-dropdown menu-item"
            >
              <NavDropdown.Item
                as={Link}
                to="/products/accesories"
                className="menu-dropdown-item"
              >
                Accesorios
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/products/amplifiers"
                className="menu-dropdown-item"
              >
                Amplificadores
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/products/instruments"
                className="menu-dropdown-item"
              >
                Instrumentos
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/products/pedals"
                className="menu-dropdown-item"
              >
                Pedales
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/products/production"
                className="menu-dropdown-item"
              >
                Producción
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/" className="menu-dropdown-item">
                Todos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" className="menu-item">
              Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="menu-item">
              Quiénes somos
            </Nav.Link>
          </Nav>
          <CartWidget />
          {user === "" ? (
            <Button
              variant="outline-warning"
              className="btn-menu"
              onClick={() => handleAuthentication(googleProvider)}
            >
              Iniciar Sesión con Google
            </Button>
          ) : (
            <UserUI user={user} logOut={logOut} />
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
