import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import Spinner from "react-bootstrap/Spinner";
import ItemDetail from "./ItemDetail";

const ProductDetailContainer = () => {
  const [items, setItems] = useState({});

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getItem = new Promise((resolve) => {
    setTimeout(() => {
      const data = id ? products.filter((item) => item.id == id) : products;

      resolve(data);
    }, 1200);
  });

  useEffect(() => {
    getItem
      .then((response) => setItems(response))
      .finally(() => setLoading(false));
  }, [id]);

  console.log(items);

  return loading ? (
    <>
      <h2>cargando...</h2>
      <Spinner
        style={{ margin: "50%", marginTop: "200px" }}
        animation="border"
        variant="primary"
      />
    </>
  ) : (
    <div>
      <ItemDetail items={items} />
    </div>
  );
};

export default ProductDetailContainer;





/* const [item, setItem] = useState({});

const [loading, setLoading] = useState(true);

const { id } = useParams();

useEffect(() => {
  setLoading(true);

  const getItems = new Promise((resolve) => {
setTimeout(() => {
    const dataId = id ? 
    products.find((item) => item.id === id)
    : products;

    resolve(dataId);
}, 2000);

  });

  getItems
  .then((res) => {
    setItem(res);
  })
  .finally(() => setLoading(false));
}, [id]);

console.log(id) 






  return loading ? (
      <Spinner style={{margin:'50%', marginTop:'200px'}} animation="border" variant="primary" />

   
  ) : 
  
  <div>
     <ItemDetail 
   {...item}/>
      
  </div> */