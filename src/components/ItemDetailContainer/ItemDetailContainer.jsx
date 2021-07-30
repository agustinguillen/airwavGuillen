import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import {db} from './../../Firebase';

const ItemDetailContainer = ({id}) => {
    const [products, setProducts] = useState([]);
    let product;

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

    if(products.length > 0){
        product = products.find(x => x.id === id)
    }

    return (
        <>
            {
            products.length > 0 &&
                (
                <div className="text-center mt-3">
                    <ItemDetail item={product}/>
                </div>
                )
            }
        </>
    )
}

export default ItemDetailContainer;