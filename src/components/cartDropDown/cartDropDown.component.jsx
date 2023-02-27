import {CartItems, EmptyMessage, CartDropdownContainer} from "./cartDropDown.style.jsx";
import Button from "../../components/Button/Button.component"

// import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../CartItem/CartItem.component";
import { selectNewCartItems } from "../../Redux Store/cart/cart.selector.js";
import {useSelector} from 'react-redux';

const CartDropDown = () => {
    const cartItems = useSelector(selectNewCartItems);
    // const {cartItems} = useContext(CartContext);
    const Navigate = useNavigate();
    const checkoutHandler = () => {
        Navigate("/checkout");
    };
    return(
        <CartDropdownContainer>
            <CartItems>
                { cartItems.length?
                    cartItems.map((cartItem) =>
                        <CartItem key ={cartItem.id} cartitem={cartItem} />
                    ) : 
                    <EmptyMessage> Your cart is empty !</EmptyMessage>
                }
            </CartItems>
            <Button onClick={checkoutHandler}>Go to cart</Button>
        </CartDropdownContainer>

    )
}

export default CartDropDown;