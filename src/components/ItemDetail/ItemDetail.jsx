import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [amount, setAmount] = useState(Number(0));

  const onAdd = (amount) => {
    setAmount(amount);
  };

  return (
    <>
      {item !== undefined ? (
        <div className="text-center">
          <h3>Detalle de Producto</h3>
          <div className="itemDetail d-flex flex-wrap mt-5">
            <div className="col-lg-5 col-md">
              <img
                src={item?.image}
                alt="Imagen del producto"
                className="itemImage"
              />
            </div>
            <div className="col-lg-7 col-md text-center itemInfo">
              <h4>{item?.name}</h4>
              <p className="price">${item?.price.toLocaleString('es-AR')}</p>
              <p className="mx-5">{item?.description}</p>
              <p>Unidades en stock: {item?.stock}</p>
              <ItemCount
                item={item}
                stock={item?.stock}
                initial="1"
                onAdd={onAdd}
              />
              {amount > 0 && (
                <Link to="/cart">
                  <Button variant="dark" className="mx-2">
                    Comprar ahora
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h3>Detalle de Producto</h3>
          <div className="itemDetail d-flex flex-wrap justify-content-center mt-5">
            <p style={{ fontWeight: "800", fontSize: "x-large" }}>
              El item seleccionado no existe <br/>Encontrá lo que buscas en
              nuestro
              <Link to="/" style={{ textDecoration: "none" }}>
                {" "}
                catálogo
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
