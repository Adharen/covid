import React from 'react'
import { useParams } from 'react-router-dom'
import Chart from 'react-apexcharts'
import { useEffect,useState } from 'react';
import './App.css'
function Graph() {

    const params = useParams();
    const state = params.state;
    const deaths = params.deaths;
    const recovered = params.recovered;
    const confirmed = params.confirmed;
    const deltaconfirmed = params.deltaconfirmed;
    const deltarecovered = params.deltarecovered;
    const active = params.active;

    const [loading ,setloading] = useState(true);

   useEffect(()=>{
    setloading(false);
   },[]);

    if(loading){
      return <h3 className='loading'>Loading...</h3>
     }
  return (
    <div>
        {/* <h1>{state}</h1>
        <h2>{deaths}</h2>
        <h2>{recovered}</h2>
         <h2>{confirmed}</h2> */}
         <h1 className='head'>{`COVID 19 GRAPH OF ${state}`}</h1>
 <div className="chart">
 <Chart 
  type="bar"
  width={1000}
  height={500}

  series={[
     {
        data:[active,deaths,recovered,confirmed,deltaconfirmed,deltarecovered],
     }
  ]}


  options={{
    title:{
        text:`COVID GRAPH OF ${state}`,
        style:{fontSize:25}
    },
    colors:['#f90000'],
    theme:{mode:'dark'},
    xaxis:{
        categories:["ACTIVE","DEATHS","RECOVERED","CONFIRMED","DELTACONFIRMED","DELTARECOVERED"],
        title:{text:"COVID19 GRAPH"}
    },
    yaxis:{
        title:{
            text:"COVID PATIENTS"
        }
    },
    stroke: {
                curve: 'straight'
              },
    
  }}
  >

  </Chart>
 </div>

    </div>
  ) 
}

export default Graph