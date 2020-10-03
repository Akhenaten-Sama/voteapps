import React from 'react';
import CardPanel from '../cardPanel/cardPanel'
import Progressbar from '../ProgressBar/progressbar'
import './cards.scss'

class Main extends React.Component{
    state ={
        list:[
            {name:'Laolu', imgUrl:'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80', num:0, color:'green'},
            {name:'Izu', imgUrl:'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80', num:0, color:'red'},
            {name:'SegunFlames', imgUrl:'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80', num:0, color:'blue'}, 
            {name:'Dayo', imgUrl:'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80', num:0, color: 'pink'},
            {name:'Shomz', imgUrl:'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80', num:0, color:'gray'},
            {name:'Wiz', imgUrl:'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80', num:0, color:'orange'},
            {name:'Mac', imgUrl:'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80', num:0, color:'yellow'},
            
            
            
        ],
        total:15
    } 


handleIncrease = (i)=> {
  this.setState(state=>{
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

handleDecrease = (i)=> {
    this.setState(state=>{
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

render(){

    console.log(this.state.total)
    return ( <div className='wrapper'>

        <div className='total'>
        <h2 className='heading'>Total Votes Left </h2>
        <h4 className='number'>{this.state.total}</h4>
        <Progressbar total = {this.state.total}/>
        </div>
        <div className='cards'>
        { 
            this.state.list.map(
                (obj, idx)=> <CardPanel 
                 key={idx} 
                 name={obj.name} 
                 imgUrl={obj.imgUrl}
                 num={obj.num}
                 idx={idx}
                 color={obj.color}
                 total={this.state.total}
                 handleIncrease={this.handleIncrease}
                 handleReduce ={this.handleDecrease}
                 /> )
                
                 
                }
        </div>
        
        </div> )
}

}

export default Main