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
        }, 2000);
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
{/*        <h3 style={{marginLeft:'40%', marginTop:'120px'}}>cargando...</h3>
 */}      <Spinner style={{margin:'50%', marginTop:'200px'}} animation="border" variant="primary" />
      </>
     
    ) : (

      <div style={{backgroundColor:"grey"}}>
        <Items items={items}/>
      </div>
     
        /* <div  style={{display:'flex', flexWrap: 'wrap', margin: '120px 45px'} }>
        { items.map( items =>
        
        <div key={items.id}>

<Card className='cardsContainer' style={{ width: '16.875rem', height: '26rem', margin: '20px' }}>
      <Card.Img variant="top" src={items.gallery} />
      <Card.Body>
        <Card.Title style={{fontSize:'1.2rem'}} >{items.title}</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush" style={{fontSize:'0.75rem'}}>
        <ListGroup.Item>{items.include}</ListGroup.Item>
        <ListGroup.Item>{items.duration}</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Text style={{fontSize:'0.7rem'}}>
          {items.description}
        </Card.Text>
        
        <Card.Link style={{fontSize:'0.8rem', display: 'flex', justifyContent: 'right'}} href="#">ver más</Card.Link>
      </Card.Body>
    </Card>


        </div>
        
        
        )




        }
        
        
        </div>

 */


    );
  };


export default ProductsListContainer;