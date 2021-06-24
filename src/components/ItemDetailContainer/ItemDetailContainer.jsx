import './ItemDetailContainer.scss';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';

const ItemDetailContainer = ({id}) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve([
                    {id:'1', name:'Fender Stratocaster', price:'200000', image:'https://res.cloudinary.com/vaporbox/image/upload/v1623960597/airwav/789906-MLA31575501368_072019-F_ec3ys4.jpg', stock: '15', category: 'instruments'},
                    {id:'2', name:'Ibanez Bajo', price:'50000', image:'https://res.cloudinary.com/vaporbox/image/upload/v1623960635/airwav/804712-MLA31634134520_072019-F_luetsy.jpg', stock: '25', category: 'instruments'},
                    {id:'3', name:'Mapex Bateria', price:'75000', image:'https://res.cloudinary.com/vaporbox/image/upload/v1623960654/airwav/948356-MLA31056366854_062019-F_u2j95m.jpg', stock: '7', category: 'instruments'},
                    {id:'4', name:'Korg Sintetizador', price:'60000', image:'https://res.cloudinary.com/vaporbox/image/upload/v1623960547/airwav/D_NQ_NP_213111-MLA20497280525_112015-O_db0hdb.webp', stock: '5', category: 'instruments'},
                    {id:'5', name:'Placa de Audio Focusrite', price:'25000', image:'https://res.cloudinary.com/vaporbox/image/upload/v1624551553/airwav/images_3_cmypgp.jpg', stock: '15', category: 'production'},
                    {id:'6', name:'Amplificador Vox AC15', price:'65000', image:'https://res.cloudinary.com/vaporbox/image/upload/v1624552160/airwav/images_4_k7ruj0.jpg', stock: '25', category: 'amplifiers'},
                    {id:'7', name:'Pedal Fuzz Big Muff', price:'20000', image:'https://res.cloudinary.com/vaporbox/image/upload/v1624552241/airwav/images_5_t7truv.jpg', stock: '7', category: 'pedals'},
                    {id:'8', name:'Cable XLR', price:'3500', image:'https://res.cloudinary.com/vaporbox/image/upload/v1624552321/airwav/images_6_uzastm.jpg', stock: '5', category: 'accesories'}
                ])
            }, 2000)
        })     
        getProduct.then((result)=>{
            let item = result.find(x => x.id === id)
            setProduct(item)
        })
    }, [id])

    return (
        <>
            <div className="itemDetailContainer text-center">
                <ItemDetail item={product}/>
            </div>
        </>
    )
}

export default ItemDetailContainer;