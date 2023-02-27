import "./ProductCard.style.scss";
import Button, {buttonCategory} from "../Button/Button.component";
// import { CartContext } from "../../context/cart.context";
// import { useContext } from "react";
import { addItemsToCart } from "../../Redux Store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";

import { selectNewCartItems } from "../../Redux Store/cart/cart.selector";

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectNewCartItems);
    // const {addItemsToCart} = useContext(CartContext);
    const AddProductToCart = () => dispatch(addItemsToCart(cartItems,product));
    const {name, price, imageUrl} = product;
    return(
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={buttonCategory.inverted} onClick={AddProductToCart}>Add to cart</Button>
        </div>

    )
}

export default ProductCard