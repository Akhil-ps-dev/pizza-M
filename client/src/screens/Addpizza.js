import React, { useEffect, useState } from 'react'
import { addPizza } from '../actions/pizzaActions'
import { useDispatch, useSelector } from 'react-redux'

export default function Addpizza() {

  const [name, setname] = useState()
  const [smallprice, setsmallprice] = useState()
  const [mediumprice, setmediumprice] = useState()
  const [largeprice, setlargeprice] = useState()
  const [image, setimage] = useState()
  const [description, setdescription] = useState()
  const [category, setcategory] = useState()



const dispatch =useDispatch()
const addpizzastate = useSelector(state=>state.addPizzaReducer)
  function formHandler(e) {
    e.preventDefault();
    const pizza = {
      name, image, description, category, prices: {
        small: smallprice,
        medium: mediumprice, large: largeprice
      }
    }
    console.log(pizza);
  dispatch(addPizza(pizza));
  }



  return (
    <div>
      <div >
        <h2>Add Food</h2>
        <form onSubmit={formHandler}>
          <input className='form-control' type="text" placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }} />
          <input className='form-control' type="text" placeholder='small varient price' value={smallprice} onChange={(e) => { setsmallprice(e.target.value) }} />
          <input className='form-control' type="text" placeholder='medium varient price' value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }} />
          <input className='form-control' type="text" placeholder='large varient price' value={largeprice} onChange={(e) => { setlargeprice(e.target.value) }} />
          <input className='form-control' type="text" placeholder='category' value={category} onChange={(e) => { setcategory(e.target.value) }} />
          <input className='form-control' type="text" placeholder='description' value={description} onChange={(e) => { setdescription(e.target.value) }} />
          <input className='form-control' type="text" placeholder='image url' value={image} onChange={(e) => { setimage(e.target.value) }} />

          <button className='btn mt-3' type="submit">Add Pizza</button>
        </form>
      </div>

    </div>
  )
}
