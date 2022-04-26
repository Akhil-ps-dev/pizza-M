import axios from "axios";
export const getAllPizzas = () => async dispatch => {


    dispatch({ type: 'GET_PIZZAS_REQUEST' })

    try {
        const response =await axios.get('/api/pizzas/getallpizzas')
        console.log(response);
        dispatch({ type: 'GET_PIZZAS_SUCCESS' , payload: response.data})

    } catch (error) {
        dispatch({ type: 'GET_PIZZAS_FAILED' , payload: error})


    }



}


export const filterPizzas = (searchkey, category) => async dispatch => {

var filteredPizzas ;
    dispatch({ type: 'GET_PIZZAS_REQUEST' })

    try {
        const response =await axios.get('/api/pizzas/getallpizzas')
        filteredPizzas = response.data.filter(pizza=>pizza.name.toLowerCase().includes(searchkey))

if(category != 'all'){
    filteredPizzas = response.data.filter(pizza=>pizza.category.toLowerCase()==category)

}



        dispatch({ type: 'GET_PIZZAS_SUCCESS' , payload: filteredPizzas})

    } catch (error) {
        dispatch({ type: 'GET_PIZZAS_FAILED' , payload: error})


    }



}
export const addPizza =(pizza)=>async dispatch=>{
    dispatch({type: 'ADD_PIZZA_REQUEST'})
  try {
      const response= await axios.post('/api/pizzas/addpizza', {pizza})
      console.log(response);
  dispatch({type: 'ADD_PIZZA_SUCCESS'})

      
  } catch (error) {
      
  dispatch({type: 'ADD_PIZZA_FAILED', payload: error})

  }

}