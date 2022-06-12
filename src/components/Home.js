import React from 'react'
import Card from  './Card';
import './Card.css';
import CardsSection2 from './CardsSection2';
function Home() {
  return (
    <div>
        <div className='Home'>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div className='home'>
          <Card/>
          <Card/>
          <Card/>
      </div>
      
      <div>
    
        
      <div className='homes' style={{display:'flex', justifyContent: "space-between", width:"1200px", marginTop:"-40px", marginLeft:"13.5%"}}>
      
         <CardsSection2/>
         <CardsSection2/>
         <CardsSection2/>
         <CardsSection2/>
      </div>
      <div className='homes' style={{display:'flex', justifyContent: "space-between", width:"1200px", marginTop:"30px", marginLeft:"13.5%"}}>
      
      <CardsSection2/>
      <CardsSection2/>
      <CardsSection2/>
      <CardsSection2/>
   </div>
      </div>
      <div className='lastSection' style={{marginTop:"1000px", border:" 1px solid white", backgroundColor: 'rgba(246, 238, 238, 0.936)',
      width:"1250px", marginLeft:"150px"}}>
        <div style={{display:"flex"}}>
         <p><b>Latest</b></p>
         <hr style={{
            color: "color",
            backgroundColor: "color",
            height: 5
        }}/>

        </div>
       <div style={{display:'flex', justifyContent: "space-between", width:"1200px", marginTop:"70px", marginLeft:"2%", marginBottom:"5%", marginRight:"2%"}} >
       <CardsSection2/>
      <CardsSection2/>
      <CardsSection2/>
      <CardsSection2/>
       </div>
       <div style={{display:'flex', justifyContent: "space-between", width:"1200px", marginTop:"30px", marginLeft:"2%", marginBottom:"4%", marginRight:"2%"}} >
       <CardsSection2/>
      <CardsSection2/>
      <CardsSection2/>
      <CardsSection2/>
       </div>
      </div>
    </div>
  )
}

export default Home
