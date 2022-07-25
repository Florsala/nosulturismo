import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Items = ({items}) => {
  return (
    <div >
        <div  style={{display:'flex', flexWrap: 'wrap', margin: '150px 45px'} }>
        { items.map( items =>
        
        <div key={items.id}>
<Link to={`/tours/${items.id}`} style={{textDecoration:'none', color:'#000000'}}>
<Card className='cardsContainer' style={{ width: '22rem', height: '30rem', margin: '20px' }}>
      <Card.Img style={{objectFit:'cover', height:'40%'}} variant="top" src={items.gallery[0]} />
      <Card.Body>
        <Card.Title style={{fontSize:'1.2rem'}} >{items.title}</Card.Title>
        <p>{items.destination}</p>
        
      </Card.Body>
      <ListGroup className="list-group-flush" style={{fontSize:'0.75rem'}}>
        <ListGroup.Item>Incluye: {items.include[0]}</ListGroup.Item>
        <ListGroup.Item>Duración del tour:{items.duration}</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Text style={{fontSize:'0.8rem', whiteSpace: 'nowrap',overflow: 'hidden', textOverflow: 'ellipsis'}}>
          {items.description[0]}
        </Card.Text>
        
        <Card.Link style={{fontSize:'0.8rem', display: 'flex', justifyContent: 'right'}} >ver más</Card.Link>
      </Card.Body>
    </Card>
    </Link>

        </div>
        
        
        )




        }
        
        
        </div>





    </div>
  )
}

export default Items