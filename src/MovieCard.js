import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';



export default function MovieCard() {

  return (
    <Card  style={{ width: '16rem', border:'solid grey 1px' ,borderRadius:1,backgroundColor:'#181C14',color:'white'}}>
    <Card.Img variant="top" src="/avatar.jpg" style={{width:'100%',height:170}}/>

    <Card.Body>
      <Card.Title><h2>Card Title</h2></Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <div style={{backgroundColor:'#FFB200',padding:10,color:'black'}}>
      <i class="bi bi-star-fill"></i><span> 3.5</span>
      </div>
    </Card.Body>
  </Card>
  )

}
