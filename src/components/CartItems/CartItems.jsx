import { useContext } from "react";
import CartContext from "./../../context/cart/CartContext";
import { Card, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

const CartItems = () => {
  const { cartItems, removeItem } = useContext(CartContext);

  const remove = (item, quantity) => {
    removeItem(item, quantity);
  };

  return (
    <>
      {cartItems.map((cartItem) => (
        <Card
          key={cartItem.item.id}
          style={{ borderRadius: "25px", marginBottom: "2px" }}
        >
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-wrap">
              <Card.Img
                src={cartItem.item.image}
                style={{
                  width: "6rem",
                  height: "6rem",
                  marginRight: "30px",
                  borderRadius: "25px",
                }}
              />
              <div className="d-flex">
                <div className="mx-3">
                  <Card.Title>{cartItem.item.name}</Card.Title>
                  <Card.Text style={{ fontWeight: "700", fontSize: "x-large" }}>
                    ${cartItem.item.price.toLocaleString('es-AR')}
                    <span
                      style={{
                        marginLeft: "10px",
                        color: "grey",
                        fontWeight: 500,
                      }}
                    >
                      x{cartItem.quantity}
                    </span>
                  </Card.Text>
                </div>
              </div>
            </div>
            <div style={{ margin: "0.5rem 1rem" }}>
              <Button
                variant="outline-danger"
                className="btn-sm"
                style={{
                  border: "none",
                  borderRadius: "100%",
                  height: "2rem",
                  width: "2rem",
                }}
                onClick={() => remove(cartItem.item, cartItem.quantity)}
              >
                <FaTimes style={{ margin: "0 0 0.2rem 0" }} />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default CartItems;
