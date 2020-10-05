import React from 'react';

const Card = ({name, num, img, color })=> (
    <div>
    <div className= {`cardpanel ${color}`}>
    <h4 className='card-name' >{name}</h4>   
    <img className='card-image' alt=''src={img} />
   </div>
   </div>
   )
    



export default Card