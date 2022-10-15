import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './App.css'
import {MdOutlineCoronavirus} from 'react-icons/md'
const Statewise = () => {

 const [s ,sd] = useState([]) 
 const [loading ,setloading] = useState(true);

const getcovidData=async()=>{

  const fetchs = await fetch("https://data.covid19india.org/data.json");
  const actualData = await fetchs.json();
  console.log(actualData.statewise);
  sd(actualData.statewise.slice(1)); 
  setloading(false);
}

useEffect(()=>{
    getcovidData();
},[])


const [t ,st] = useState("");
 if(loading){
  return <h3 className='loading'>Loading...</h3>
 }
  return (
    <>
    <div className="int">
    
    <h2>COVID 19 INDIA<MdOutlineCoronavirus/></h2>
    <input type="search" placeholder='Enter State Name...' value={t} onChange={(e)=>{st(e.target.value)}}/>
    </div>
        <table className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">state</th>
      <th scope="col">confirmed</th>
      <th scope="col">recovered</th>
      <th scope="col">deaths</th>
      <th scope="col">More</th>
    </tr>
  </thead>
  <tbody>
    {   
        // eslint-disable-next-line array-callback-return
        s.filter(function (val) {
            if (t === "") {
                return val;
            } else if (val.state.toLowerCase().includes(t.toLowerCase())) {
                return val;
            }
        })

        .map((item,index)=>{
            return (
              <tr>
      <td>{item.state}</td>
      <td>{item.confirmed}</td>
      <td className='recovered'>{item.recovered}</td>
      <td className='death'>{item.deaths}</td>
      <td className='click'> <Link to={'/Graph/'+item.state+'/'+item.deaths+'/'+item.recovered+'/'+item.confirmed+'/'+item.deltaconfirmed+'/'+item.deltarecovered+'/'+item.active}>More</Link></td>
    </tr>
            )
        })
    }
  </tbody>
</table>
    </>
  )
}

export default Statewise