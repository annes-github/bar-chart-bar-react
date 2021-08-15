import React from 'react';
import './Title.css';
import Logo from '../../demo/src/bar-chart-48.png'



function Title(props) {

    return (

    <div class="BarChart-title"> {props.title} 
    <img src={Logo} alt="" />   
    </div>

   )

}

export default Title;