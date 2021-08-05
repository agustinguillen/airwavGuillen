import "./Item.scss";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Item = ({ id, productName, price, image, stock }) => {
  const [hover, setHover] = useState(false);

  function handleScroll(){
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <>
      <Link
        to={`/detail/${id}`}
        style={{ textDecoration: "none", color: "grey" }}
        onClick={() => handleScroll()}
      >
        <Card
          style={{ width: "14em", margin: "0.8rem", borderRadius: "25px" }}
          className="item"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="d-flex flex-column justify-content-center">
            <Card.Img
              variant="top"
              src={image}
              style={{
                objectFit: "cover",
                width: "13.9em",
                height: "13.9em",
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
              }}
            />
            <Card.Body>
              <Card.Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  textDecoration: "none",
                }}
              >
                ${price.toLocaleString('es-AR')}
              </Card.Text>
              {hover && (
                <Card.Text
                  style={{
                    fontSize: "0.8rem",
                  }}
                >
                  {productName}
                </Card.Text>
              )}
            </Card.Body>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default Item;
