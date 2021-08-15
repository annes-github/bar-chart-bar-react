import React from 'react';
import './Bar.css';


function Bar(props) {

    return(

    <div className={`BarChart-bar-${props.barKey}`} style={{height: (props.data[props.barKey] * 50) + "px"}}>
    {props.barKey} {props.data[props.barKey]} 
    </div>
    )
}

export default Bar;
