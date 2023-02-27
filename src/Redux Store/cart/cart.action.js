import { createAction } from "../../utils/Reducer/Reducer.utils";
import {CART_ACTION_TYPES} from "./cart.action-types";

const addCartItem= (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id == productToAdd.id );

    if (existingCartItem){
        return ( cartItems.map((cartItem) => 
            cartItem.id==productToAdd.id ? {...cartItem, quantity:cartItem.quantity+1} : cartItem
         ) )
    }

    return [...cartItems, {...productToAdd, quantity:1}]

}

const removeCartItem= (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id == productToRemove.id );

    if(existingCartItem.quantity==1){
        return cartItems.filter((cartItem) => cartItem.id!=productToRemove.id);
    }

    return ( cartItems.map((cartItem) => 
            cartItem.id==productToRemove.id ? {...cartItem, quantity:cartItem.quantity-1} : cartItem
         ) )
}

const clearCartItem = (cartItems, clearItem) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id == clearItem.id );
    if(existingCartItem){
        return cartItems.filter((cartItem) => cartItem.id!=clearItem.id);
    }

}

export const setIsCartOpen = (bool) => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
}

export const addItemsToCart = (cartItems, productToAdd) => {
    const newcartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newcartItems);
}

export const removeItemsFromCart = (cartItems,productToRemove) => {
    const newcartItems = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newcartItems);
}

export const removeItemFromCheckout = (cartItems,clearItem) => {
        const newcartItems = clearCartItem(cartItems, clearItem);
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newcartItems);
    }