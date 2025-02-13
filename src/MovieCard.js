import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';



export default function MovieCard({title,description,posterURL,rating}) {

  return (
    <Card  style={{   position:'relative',width: '16rem',height:400, border:'solid grey 1px' ,borderRadius:6,backgroundColor:'#181C14',color:'white'}}>

    <Card.Img variant="top" src={posterURL} style={{width:'100%',height:180,borderRadius:6}}/>

    <Card.Body style={{margin:'0 10px'}}>
      <Card.Title><h2>{title}</h2></Card.Title>
      <Card.Text style={{
         display: '-webkit-box',
         WebkitBoxOrient: 'vertical',
         WebkitLineClamp: 4,
         overflow: 'hidden'}}>{description}
      </Card.Text>
    </Card.Body>
    
    <div style={{position:'absolute',bottom:0,boxSizing:'border-box',width:'100%',backgroundColor:'#FFB200',padding:10,color:'black',marginBottom:0}}>
      <i class="bi bi-star-fill"></i><span> {rating}</span>
      </div>
  </Card>
  )

}
