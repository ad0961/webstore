import "./CheckoutItem.style.scss";
// import { useContext } from "react";
// import { CartContext } from "../../context/cart.context";

import {removeItemFromCheckout, addItemsToCart, removeItemsFromCart} from '../../Redux Store/cart/cart.action'
import { useDispatch, useSelector } from "react-redux";
import { selectNewCartItems } from "../../Redux Store/cart/cart.selector";

const CheckoutItem = ({checkoutitem}) => {
    const dispatch = useDispatch();
    const {name, quantity, imageUrl, price} = checkoutitem;
    const cartItems = useSelector(selectNewCartItems);
    // const {removeItemFromCheckout, addItemsToCart, removeItemsFromCart} = useContext(CartContext);
    const remove = () => dispatch(removeItemFromCheckout(cartItems, checkoutitem));
    const addItem = () => dispatch(addItemsToCart(cartItems, checkoutitem));
    const removeItem = () => dispatch(removeItemsFromCart(cartItems, checkoutitem));
    return(
        <div className="checkout-item-container">
        <div className="image-container">
            <img src={imageUrl} alt={`${name}`}/>
        </div>
        <span className="name">{name}
        </span>
        <span className="quantity">
            <div className="arrow" onClick={removeItem}>
                &#10094;
            </div>
            <span className="value">
            {quantity}
            </span>
            <div className="arrow" onClick={addItem}>
                &#10095;
            </div>
        </span>
        <span className="price">{price}
        </span>
        <div className="remove-button" onClick={remove}>&#10005;
        </div>
    </div>

    )
}

export default CheckoutItem;