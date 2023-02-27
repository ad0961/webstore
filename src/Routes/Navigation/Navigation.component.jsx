import {Outlet, Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/crown.svg';

import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './Navigation.style.jsx'
import { useContext } from 'react';

// import { UserContext } from '../../context/user.context';

// import {userSignout} from '../../utils/Firebase/Firebase.component';
import CartIcon from '../../components/cartIcon/CartIcon.component';

import CartDropDown from '../../components/cartDropDown/cartDropDown.component';
// import { CartContext } from '../../context/cart.context';

import {useDispatch, useSelector} from 'react-redux';
import { selectCurrentUser } from '../../Redux Store/user/User.selector';
import { selectIsCartOpen } from '../../Redux Store/cart/cart.selector';
import { signOutStart } from '../../Redux Store/user/User.action';

const Navigation = () => {
  const dispatch = useDispatch();
  const signOutHandler =() => dispatch(signOutStart());
  const isCartOpen = useSelector(selectIsCartOpen);
  // const {isCartOpen} = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser);
  // const { currentUser, setCurrentUser } = useContext(UserContext);
  // const signOutHandler = async () => {
  //   await userSignout();
  //   // setCurrentUser(null);
  // }
    return (
      <>
        <NavigationContainer>
          <LogoContainer to='/'>
            <Logo className='logo'/>
          </LogoContainer>
          <NavLinks>
            <NavLink to="/shop">
                SHOP
            </NavLink>
            {
              currentUser ? 
              (<NavLink as="span" onClick={signOutHandler}>
                  Sign Out
              </NavLink>) :
              (<NavLink to="/auth">
                  SIGN IN
              </NavLink>)
            }
            <CartIcon />
          </NavLinks>
          { isCartOpen && <CartDropDown />}
        </NavigationContainer>
        <Outlet />
      </>
    )
}

export default Navigation;