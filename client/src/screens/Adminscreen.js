import {React, useEffect} from 'react'
import Userlist from './Userlist';
import { Routes ,Route, Link } from 'react-router-dom';
  

export default function Adminscreen() {
    return (
        <div>


            <div className='row justify-content-center'>

                <div className='col-md-10'>

                </div>
            </div>




            <h2 style={{ fontSize: '35px' }} >Admin Panel</h2>

            <ul className='adminfunctions '>
                <li>
                    <a href="/admin/userslist" >User's List</a>


                </li>
                <li>
                    <a href="/admin/foodlist">Food's List</a>


                </li>
                <li>
                    <a href="/admin/addfood">Add New Food</a>


                </li>
                <li>
                    <a href="/admin/orderslist">Order's List</a>


                </li>
            </ul>
         

                        </div>
    )
}