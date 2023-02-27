import {CartIconContainer, ShoppingIcon, ItemCount} from "./CartIcon.style.jsx";
// import { CartContext } from "../../context/cart.context";
// import { useContext } from "react";
import { setIsCartOpen } from "../../Redux Store/cart/cart.action.js";
import { selectIsCartOpen, selectNewCartCount } from "../../Redux Store/cart/cart.selector.js";

import {useSelector, useDispatch} from 'react-redux';
import { CART_ACTION_TYPES } from "../../Redux Store/cart/cart.action-types.js";

const CartIcon = () => {
    // const {isCartOpen, setIsCartOpen, cartValue} = useContext(CartContext);
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartValue = useSelector(selectNewCartCount);
    const toggle = () => {
            dispatch(setIsCartOpen(!isCartOpen));
    }
    return(
        <CartIconContainer onClick={toggle}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount className="item-count">{cartValue}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;