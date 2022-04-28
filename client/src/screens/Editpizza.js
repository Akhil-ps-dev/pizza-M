import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzaById } from '../actions/pizzaActions'


export default function Editpizza({match}) {
   const dispatch = useDispatch()

    useEffect(() => {
      
    dispatch(getPizzaById())
     
    }, [])
    
  return (
    <div>

        <h1>Edit Food</h1>
        <h1>Pizza id</h1>

    </div>
  )
}
