import React, {useContext} from 'react';
import DataContext from '../state';
import Card from '../winnerCard/winnerard'

const Winner = ()=> {

 const {state} = useContext(DataContext)
 console.log(state.total)

    const numbers = state.list.map(obj => obj.num)
   const highest = Math.max(...numbers)

    return (<div className='wrapper'>


        
        <h1 className='winner-header'>Congratulations!!!!!</h1>
        { state.list.map(obj=> {
            if(obj.num===highest){
                return <Card num={obj.num} img={obj.imgUrl} name={obj.name} />
            }
            

            })}

            
            <a className='leaderboard'href='/'> Vote Again</a>
        </div>)
}




export default Winner