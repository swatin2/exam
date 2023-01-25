import React, { useEffect, useState } from 'react'

export default function Category() {

  const [cat, setcat] = useState([])

  useEffect(()=>{

    // console.log('use effect called , call API');

    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(valueFromAPI=>{
      console.log('API DATA CALLED');
      console.log(valueFromAPI);
      setcat(valueFromAPI)
    })

  } , []);

  


  return (
    <div>
      <ul class="nav flex-column">
          {
              cat.map( (obj)=>
                <li>{obj}</li>
              ) 
          }
      </ul>
    </div>
  )
}
