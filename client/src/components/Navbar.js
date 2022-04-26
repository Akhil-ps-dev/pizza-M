import React from 'react'
import {useSelector , useDispatch} from 'react-redux';



export default function Navbar() {

const cartstate = useSelector(state=>state.cartReducer)


    return (
        <div>

     
            <nav class="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a class="navbar-brand" href="/">CHATTER BOO</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item ">
                            <a class="nav-link" href="/login">
                                Login 
                                </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/cart">
                                Cart {cartstate.cartItems.length}
                                </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}





