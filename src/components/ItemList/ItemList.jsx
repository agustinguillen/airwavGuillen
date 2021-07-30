import Item from './../Item/Item';
import Loading from './../Loading/Loading';
import { useEffect, useState } from 'react';
import {db} from './../../Firebase';

const ItemList = ({catId}) => {

    const [products, setProducts] = useState([]);
    let items;
    
    useEffect(()=>{
        (async () => {
            await db.collection('products').onSnapshot((querySnapshot)=>{
                const docs = [];
                querySnapshot.forEach((doc)=>{
                    docs.push({ ...doc.data(), id: doc.id });
                })
                setProducts(docs)
            });
        })();
        return ()=>setProducts([]);
    }, []);

    if(products.length > 0 && catId !== undefined){
        items = products.filter(product => product.category === catId && product.stock > 0)
    }else{
        items = products.filter(product => product.stock > 0)
    }

    return (
        <>
        {
            products.length > 0 ?
            (
                <div className="d-flex justify-content-start flex-wrap mx-5">
                        {items.map(
                            product => <Item 
                                        key={product?.id}
                                        id={product?.id} 
                                        productName={product?.name} 
                                        price={product?.price} 
                                        image={product?.image} 
                                        stock={product?.stock}
                                        />
                        )}
                </div>
            ) 
            : <Loading />
        }
        </>
    )
}

export default ItemList;