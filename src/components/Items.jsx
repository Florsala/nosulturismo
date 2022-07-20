import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Items = ({items}) => {
  return (
    <div >
        <div  style={{display:'flex', flexWrap: 'wrap', margin: '150px 45px'} }>
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
        <Card.Text style={{fontSize:'0.8rem', whiteSpace: 'nowrap',overflow: 'hidden', textOverflow: 'ellipsis'}}>
          {items.description}
        </Card.Text>
        
        <Card.Link style={{fontSize:'0.8rem', display: 'flex', justifyContent: 'right'}} href="#">ver más</Card.Link>
      </Card.Body>
    </Card>


        </div>
        
        
        )




        }
        
        
        </div>





    </div>
  )
}

export default Items