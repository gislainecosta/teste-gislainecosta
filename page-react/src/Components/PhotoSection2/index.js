import React from 'react';
import './index.css'

const Photo =(props)=>{
    return(
        <div id='photo-section2'>
            <img src={props.adress} alt='Lorem Ipsum'/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Photo;