import React from 'react';
import './cardPanel.scss';
const CardPanel = ({imgUrl, name, total, num, color, idx, handleIncrease, handleReduce})=> {

    const increase = ()=> {
        if (total>0){
            handleIncrease(idx)
        }
    }

    const decrease = ()=> {
        if (total<15&num>0){
            handleReduce(idx)
        }
    }

    
    
    return (<div className= {`cardpanel ${color}`}>
    <h4 className='card-name' >{name}</h4>   
    <img className='card-image' alt=''src={imgUrl} />
    <div className='num'> <span><button onClick={decrease}>-</button> </span>{num} <span> <button onClick={increase}>+</button></span></div>
   </div>)

} 

export default CardPanel