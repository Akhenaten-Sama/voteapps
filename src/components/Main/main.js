import React, {useContext, useEffect, useRef} from 'react';
import CardPanel from '../cardPanel/cardPanel'
import Progressbar from '../ProgressBar/progressbar'
import DataContext from '../state'
import './cards.scss'

const Main= ()=> {
    
const {state, setState} = useContext(DataContext)


   

   // console.log(localStorage.getItem('state'))

const handleIncrease = (i)=> {
  setState(state=>{
      const list = state.list.map((item, j)=> {
          if(j===i){
            console.log(item.num)
               item.num++
              return item
              
          } else {
            return  item
          }
          
      })
      return {
          
         list,
          total:state.total-1
         
      }
})
}

const handleDecrease = (i)=> {
 setState(state=>{
        const list = state.list.map((item, j)=> {
            if(j===i){
              
                 if(item.num>0){
                     item.num--
                     
                 }
                return item
                
                
            } else {
              return  item
            }
            
        })
        return {
            
           list,
         total:state.total+1
           
        }
  })
  }


    console.log(state.total)
    return ( <div className='wrapper'>

        <div className='total'>
        <h2 className='heading'>Total Votes Left </h2>
        <h4 className='number'>{state.total}</h4>
        <Progressbar total = {state.total}/>
        </div>
        <div className='cards'>
        { 
            state.list.map(
                (obj, idx)=> <CardPanel 
                 key={idx} 
                 name={obj.name} 
                 imgUrl={obj.imgUrl}
                 num={obj.num}
                 idx={idx}
                 color={obj.color}
                 total={state.total}
                 handleIncrease={handleIncrease}
                 handleReduce ={handleDecrease}
                 /> )
                
                 
                }
                
        </div>
         <a  onClick={(e)=>{
           if(state.total!==0){
            e.preventDefault()
            alert('Please Finish Voting!')
           }
           
         }} className='leaderboard'href='/winner'> Check LeaderBoard </a>
        </div> )
}



export default Main