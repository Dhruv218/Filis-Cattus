import { useState, useEffect } from "react";
import {  Link } from "react-router-dom";
import '../main/main.css'

const Main = () => {

  let api_key = 'live_6wj9pyjCZLqJDyBaUlejnM8iwhsysaJe64lDde5AoI3kBYibPREBbq2JHZ0VuT5Q';
  let link = 'https://api.thecatapi.com/v1/images/search?limit=16&api_key=';;
  const [data, setData] = useState([])
   
  const fetchData = (order) => {
    fetch(link + api_key + '&order=' + order)
      .then((res) => res.json())
      .then((result) => {
        setData(result)
        console.log(result);

      })
      .catch((err) => console.log('error'))
  }
  useEffect(() => {
    fetchData()
     
  }, [])

// console.log(order);
  return (
    <>
<div className="filter"> 
  <button className="btn" onClick={()=>( fetchData('RAND') )}> Random</button>
  <button className="btn"onClick={()=>(fetchData('ASC'))}> Ascending </button>
  <button className="btn"onClick={()=>(fetchData('DESC'))}> Descending</button>
</div>

      <div className="container">
        <div className="card">
          {data.map((item,i) => (
            <Link to={'/detail'} state={{ data: item }}  key={i}  >  <img className="card-img" src={item.url} alt='images' /></Link>
          )
          )}
        </div>
      </div>

    </>
  );




}
export default Main;