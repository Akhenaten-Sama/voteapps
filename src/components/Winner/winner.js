import React from 'react'
import Card from '../winnerCard/winnecard'

const Winner = ()=> {

    //Decided to use Local here directly to prevent lagging. if i set localStorage to context state for example, and use context here, at every re-render state lags.  
 const state = JSON.parse(localStorage.getItem('state'))
 console.log(state.total)

    const numbers = state.list.map(obj => obj.num)
   const highest = Math.max(...numbers)

    return (<div className='wrapper'>


        
        <h1 className='winner-header'>Congratulations!!!!!</h1>
        { state.list.map(obj=> {
            if(obj.num===highest){
                return <Card key={obj.name} num={obj.num} img={obj.imgUrl} name={obj.name} color={obj.color}/>
            }
               
            return null

            })}

            
            <a className='leaderboard'href='/'> Vote Again</a>
        </div>)
}




export default Winner