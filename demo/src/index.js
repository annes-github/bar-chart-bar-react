import React, { useEffect, useState } from 'react';
import {render} from 'react-dom';


import Bar from '../../src/Bar/Bar.js';
import InputText from '../../src/InputText/InputText.js';
import Title from '../../src/Title/Title.js';
import DateInput from '../../src/DateInput/DateInput.js';
import './App.css';
// import './Images/bar-chart.png'


function App() {

  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [data, setData] = useState([]);

  
//fetching data for the latest rates and setting data with the response
  function doFetchWithoutDate(){
    fetch('https://kc-exchangeratesapi.herokuapp.com/latest')
    .then(response => response.json())
    .then(data => {
      setData(data.rates);
    })
  }

  
  //fetching data for the rates for a specified date and setting data with the response
  function doFetchWithDate(){
    fetch('https://kc-exchangeratesapi.herokuapp.com/' + year +'-'+ month +'-' + day)
    .then(response => response.json())
    .then(data => {
      setData(data.rates);
    })
  }
  
  useEffect(doFetchWithoutDate, [])

  //Setting the month for the event of a month input
  function onMonthChange(ev){
    setMonth(ev.target.value);
  }

   //Setting the day for the event of a day input
  function onDayChange(ev){
    setDay(ev.target.value);
  }

   //Setting the year for the event of a year input
  function onYearChange(ev){
    setYear(ev.target.value);
  }

  return (
   
    <div className="App">

      <div className="body">
      
     <Title
      title="Bar Chart Currency Exchange Rates Demo   "
     />
     {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    
    <div className="controls">
      <InputText
      fetch={doFetchWithoutDate}
      />

      <div>
       <DateInput
          placeholdertext ={"Month mm"}
          onChange={onMonthChange}
          dateValue={month}
          />
          <DateInput
          placeholdertext ={"Day dd"}
          onChange={onDayChange}
          dateValue={day}
          />

         <DateInput
          placeholdertext ={"Year yyyy"}
          onChange={onYearChange}
          dateValue={year}
          />
      <button onClick={doFetchWithDate}>Submit</button>
      </div>
    </div>

    <div id="graph">

    {
        Object.keys(data).filter((key, index) => {return index <= 5}).map(key =>
         {
          return(
            <Bar 
              barKey={key}
              data={data}
            />
           )
         })
        }
      </div>
      </div>
      </div>
      
  )
}  
render(<App/>, document.querySelector('#demo'))
