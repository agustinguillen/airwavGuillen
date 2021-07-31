import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import Loading from "../Loading/Loading";
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
      {item.id !== undefined ? (
        <div className="text-center">
          <h3>Detalle de Producto</h3>
          <div className="itemDetail d-flex flex-wrap">
            <div className="col-lg-5 col-md">
              <img
                src={item?.image}
                alt="Imagen del producto"
                className="itemImage"
              />
            </div>
            <div className="col-lg-7 col-md text-center itemInfo">
              <h4>{item?.name}</h4>
              <p className="price">${item?.price}</p>
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
        <Loading />
      )}
    </>
  );
};

export default ItemDetail;
