import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import products from '../data/products';

import Items from './Items';



const ProductsDestination = () => {
    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const {Destination} = useParams();
  
     
    useEffect(() => {
      setLoading(true);
  
      const getItems = new Promise((resolve) => {
        setTimeout(() => {
          const dataId = Destination ?
           products.filter((item) => item.destination === Destination)
           : products;
  
          resolve(dataId);
        }, 2000);
      });
  
      getItems
        .then((res) => {
          setItems(res);
        })
        .finally(() => setLoading(false));
    }, [Destination]);
  console.log(items) 


    return loading ? (
      <>
{/*        <h3 style={{marginLeft:'40%', marginTop:'120px'}}>cargando...</h3>
 */}      <Spinner style={{margin:'50%', marginTop:'200px'}} animation="border" variant="primary" />
      </>
     
    ) : (

      <div >
        <Items items={items}/>
      </div>
     
      


    );
  };


export default ProductsDestination;