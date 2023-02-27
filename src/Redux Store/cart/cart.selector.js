import {createSelector} from 'reselect'

const selectCartReducer = (state) => state.cart;

export const selectNewCartItems = createSelector([selectCartReducer],
    (cart) => cart.cartItems );

export const selectIsCartOpen = createSelector([selectCartReducer],
    (cart) => cart.isCartOpen )

export const selectNewCartCount = createSelector([selectNewCartItems],
    (cart) => cart.reduce(
        (total, cartItem) => total + cartItem.quantity,0 ));

export const selectNewCartTotal = createSelector([selectNewCartItems],
    (cart) => cart.reduce((total, cartItem) => total + (cartItem.quantity*cartItem.price),0 ));
