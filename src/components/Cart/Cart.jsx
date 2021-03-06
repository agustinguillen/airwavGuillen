import { useContext } from "react";
import CartContext from "./../../context/cart/CartContext";
import CartItems from "../CartItems/CartItems";
import CartForm from "../CartForm/CartForm";
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const { totalPrice, totalItems, cartItems, clear } = useContext(CartContext);

  const clearCart = () => {
    clear();
  };

  return (
    <>
      <div className="cart-container mt-3">
        <h3 className="text-center">Carrito de Compras</h3>
        <div className="d-flex flex-wrap mt-3">
          <div
            className="col-lg-8 col-md d-flex flex-column justify-content-start"
            style={{ padding: "0.5rem 3rem" }}
          >
            {totalItems > 0 ? (
              <>
                <CartItems />
                <div className="d-flex justify-content-center mt-2">
                  <div>
                    <Button
                      variant="warning"
                      className="mb-5 btn-sm align-center"
                      onClick={() => clearCart()}
                    >
                      <FaTrash style={{ margin: "0.5rem" }} />
                      <strong>Vaciar Carrito</strong>
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="mt-5" style={{ fontWeight: "800", fontSize: "x-large" }}>
                  Tu carrito está vacío! <br></br>Buscá lo que quieras en
                  nuestros
                  <Link to="/" style={{ textDecoration: "none" }}>
                    {" "}
                    productos
                  </Link>
                </p>
              </>
            )}
          </div>
          {totalItems > 0 && (
            <div className="col-lg-4 col-md">
              <p style={{ fontWeight: "800", fontSize: "x-large", marginBottom: "1.5rem" }}>
                Precio Total: ${totalPrice.toLocaleString('es-AR')}
              </p>
              <div className="mr-lg-5">
                <CartForm products={cartItems} totalPrice={totalPrice} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
