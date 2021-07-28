import { db } from "../../Firebase";
import { Card, Dropdown, DropdownButton } from 'react-bootstrap';
import { useState } from 'react';
import Loading from './../Loading/Loading';

const Orders = () => {
  let user = JSON.parse(localStorage.getItem("session"))
  let userOrders;
  const [orders, setOrders] = useState("")
  const orderStyle = {
    margin: '1rem 7rem'
  }

  const getOrders = async () => {
    await db.collection("orders").onSnapshot((querySnapshot) => {
      let res = querySnapshot.docs;
      let orders = [];
      res.forEach((doc) => {
        orders.push({ ...doc.data(), id: doc.id });
        userOrders = orders.filter((order) => order.user === user.id);
      });   
      setOrders(userOrders)
    });
  };
  
  getOrders()
  
  return (
    <>{
      orders ?
      (
        <>
          {orders.map((order) => (
            <Card key={orders.indexOf(order)} style={orderStyle}>
              <div className="text-center">
                <span style={{fontFamily: 'Roboto', fontSize: '1.2rem'}}>Código de orden: {order?.id}</span>
              </div>
              <div className="d-flex flex-wrap">
                <Card.Body className="d-flex flex-column">
                      <Card.Text><strong>Cliente:</strong> {order?.firstName} {order?.lastName}</Card.Text>
                      <Card.Text><strong>Email:</strong> {order?.email}</Card.Text>
                      <Card.Text><strong>Teléfono:</strong> {order?.phone}</Card.Text>
                </Card.Body>
                <Card.Body className="d-flex flex-column">
                      <Card.Text><strong>Fecha:</strong> {new Date(order?.created.seconds * 1000).toLocaleDateString("es-AR")}</Card.Text>
                      <Card.Text><strong>Precio Total:</strong> ${order?.totalPrice}</Card.Text>
                      <div className="d-flex">
                        <Card.Text><strong>Productos:</strong> 
                           {order?.products.length} 
                        </Card.Text>
                        <div  style={{marginLeft: '1rem'}}>
                          <DropdownButton
                            id="dropdown-basic-button"
                            variant="warning"
                            title="Ver más"
                            >
                              {
                                order?.products.map(
                                  product =>
                                  <Dropdown.Item key={product?.item.id}>
                                    {product?.item.name}
                                  </Dropdown.Item>
                                )
                              }
                          </DropdownButton>
                        </div>
                      </div>
                </Card.Body>
              </div>
            </Card>))
          }
        </>
      )
      :
      <div className="d-flex justify-content-center">
        <Loading />
      </div>
    }
    </>
  );
};

export default Orders;
