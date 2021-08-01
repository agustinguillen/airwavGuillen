import "./CartPreview.scss";
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

const CartPreview = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <>
      <div className="cart-preview d-flex flex-column">
        <h5 className="text-center mt-2">Carrito de Compras</h5>
        <ul className="item-list">
          {cartItems.map((cartItem) => (
            <li
              key={cartItem.item.id}
              style={{ listStyle: "none", borderBottom: "1px solid grey" }}
            >
              <div
                className="d-flex justify-content-center"
                style={{ padding: "10px" }}
              >
                <img
                  src={cartItem.item.image}
                  alt="Imagen de producto"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    marginRight: "1rem",
                    marginLeft: "0",
                    borderRadius: "5px",
                  }}
                />
                <div style={{ width: "70%" }} className="d-flex">
                  <div>
                    <p style={{ marginBottom: "0" }}>
                      {cartItem.item.name.length > 18
                        ? `${cartItem.item.name.substring(0, 18)}...`
                        : cartItem.item.name}
                    </p>
                    <strong>${cartItem.item.price.toLocaleString('es-AR')}</strong>
                    <span
                      style={{
                        color: "grey",
                        fontWeight: "700",
                        marginLeft: "10px",
                      }}
                    >
                      x{cartItem.quantity}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div
          style={{ padding: "10px" }}
          className="d-flex justify-content-center"
        >
          {totalPrice > 0 ? (
            <span className="total-price">Precio total: ${totalPrice.toLocaleString('es-AR')}</span>
          ) : (
            <span className="total-price">Está vacío!</span>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPreview;
