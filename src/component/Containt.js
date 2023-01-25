import React from 'react'
import Category from './Category'
import Product from './Product'

export default function Containt() {
  return (
    <div className='container'>
     <div class="row">
        <div class="col-xl-3">
            <Category/>
        </div>
        <div class="col-xl-9">
            <Product/>
        </div>
     </div>
    </div>
  )
}
