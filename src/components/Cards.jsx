import React from 'react'

export default function 
({name,img,desc}) {
  return (
    <center>
        <div className='movie_card align-item-center'>
        <img src={img} alt="" />
        <h1>{name}</h1>
        <p>{desc}</p>
        <button className='btn btn-warning btn1' >GET IT NOW⚡</button>

            
    </div>
    </center>
  )
}



// import Card from 'react-bootstrap/Card';

// function card({name,img,desc}) {
//   return (
//     <Card style={{ width: '18rem' }} className='movie_card'>
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//         <Card.Text>
//         {desc}
//         </Card.Text>
//         <Card.Link href="#"><img src={img} alt="" /></Card.Link>
//         <Card.Link href="#">{desc}</Card.Link>
//         <button className='btn btn-warning btn1' >GET IT NOW⚡</button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default card;