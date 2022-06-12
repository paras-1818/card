import React from 'react'
import './Card.css';




function Card() {
  return (
    <div className='my-3'>
      <div className="card" style={{border: 'none',width: "18em"}}>
      <span className="position-absolute   translate-middle badge rounded-pill bg-danger"style={{left:'7%', top: '4%',zindex:'1'}}>
    Live
    
  </span>
  <img src="https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif " className="card-img-top" alt="..."/>
  <div className="card-body">
    
    <p className="card-text my-0" ><b>Some quick example text to build on the card title and make up the bulk of the card's content.</b></p>
    
  </div>
</div>
    </div>
  )
}

export default Card
