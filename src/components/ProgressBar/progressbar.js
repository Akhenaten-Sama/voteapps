import React from 'react';
import './progress.scss'

const Progressbar = ({total})=>{
   const length = total * 6.667
return (<div className='container'>
    <div style={{width: `${length}%`}} className= 'progress'>
    <span>
    </span>
    </div>
    </div>)
}

export default Progressbar