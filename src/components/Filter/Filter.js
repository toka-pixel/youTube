import React from 'react';
import './Filter.scss';

const Filter=({totalResults})=>{

    return(
        <div className='filter container'>
            
               <p>About {totalResults} filtered results</p>
               <p> Filter</p>
            
        </div>
    )
}

export default Filter