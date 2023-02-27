import "./Checkout.style.scss";
// import { useContext } from "react";
// import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";

import { selectNewCartItems, selectNewCartTotal } from "../../Redux Store/cart/cart.selector";
import {useSelector} from 'react-redux';
import PaymentForm from "../../components/Payment-form/PaymentForm.component";

const Checkout = () => {
    // const {cartItems, cartTotal} = useContext(CartContext);
    const cartItems = useSelector(selectNewCartItems);
    const cartTotal = useSelector(selectNewCartTotal);
    return(
             <div className="checkout-container">
                <div className="checkout-header">
                        <div className="header-block">Product
                        </div>
                        <div className="header-block">Description
                        </div>
                        <div className="header-block">Quantity
                        </div>
                        <div className="header-block">Price
                        </div>
                        <div className="header-block">Remove
                        </div>
                </div>

            {
            cartItems.map((cartItem) => {
                return(                    
                    <CheckoutItem key ={cartItem.id} checkoutitem={cartItem}/>
                )
                
            })
        }
        <span className="total">Total : ${cartTotal}</span>
        <PaymentForm />
        </div>
    )
}

export default Checkout;