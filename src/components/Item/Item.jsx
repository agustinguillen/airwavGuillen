import './Item.scss';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Item = ({id, productName, price, image, stock}) => {
        
        const [hover, setHover] = useState(false);

        return (
            <>
                <Link to={`/detail/${id}`} style={{textDecoration: 'none', color:'grey'}}>
                    <Card style={{ width: '16em', margin: '2rem', borderRadius: '25px' }} className='item'
                        onMouseEnter={()=>setHover(true)}
                        onMouseLeave={()=>setHover(false)}
                    >
                        <div className="d-flex flex-column justify-content-center">
                            <Card.Img variant="top" src={image} style={{
                                objectFit: 'cover',
                                width: '14rem',
                                height: '14rem',
                                padding: '2rem'
                            }}/>
                            <Card.Body>
                                <Card.Title>{productName}</Card.Title>
                                {hover && (
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    </Card.Text>) }                                         
                                <Card.Text style={{
                                    color: 'black', 
                                    fontWeight:'bold', 
                                    fontSize:'1.5rem', 
                                    textDecoration:'none'
                                }}>
                                    ${price}
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Link>
            </>
        )
}

export default Item;