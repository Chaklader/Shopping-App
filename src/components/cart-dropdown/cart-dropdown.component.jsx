import './cart-dropdown.styles.scss';

import {useNavigate} from 'react-router-dom';
import React, {useContext} from 'react';
import Button from "../button/button.component";
import {CartContext} from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();


    const gotoCheckoutHandler = ()=>{
        navigate("/checkout");
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item=> (

                    <CartItem key={item.id} cartItem={item}/>
                ))}
            </div>
            <Button onClick={gotoCheckoutHandler}>CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;
