import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import Spinner from 'react-bootstrap/Spinner';

import Items from './Items';



const ProductsListContainer = () => {
    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const {CategoryId} = useParams();
  
     
    useEffect(() => {
      setLoading(true);
  
      const getItems = new Promise((resolve) => {
        setTimeout(() => {
          const dataId = CategoryId ?
           products.filter((item) => item.category === CategoryId)
           : products;
  
          resolve(dataId);
        }, 2500);
      });
  
      getItems
        .then((res) => {
          setItems(res);
        })
        .finally(() => setLoading(false));
    }, [CategoryId]);
  console.log(items) 


    return loading ? (
      <>
     <Spinner style={{margin:'50%', marginTop:'200px'}} animation="border" variant="primary" />
      </>
     
    ) : (

      <div >
        <Items items={items}/>
      </div>
     
        
    );
  };


export default ProductsListContainer;