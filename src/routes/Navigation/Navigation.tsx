import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as DresshuupLogo } from "../../assets/dresshuup.svg";

import { selectCurrentUser } from "../../store/user/user-selector";
import { signOutStart } from "../../store/user/user-action";

import { selectIsCartOpen } from "../../store/cart/cart-selector";

import CartIcon from "../../components/Cart-Icon/Cart-Icon";
import CartDropDown from "../../components/CartDropDown/CartDropDown";
import {
  NavigationContainer,
  LinksContainer,
  LogoContainer,
  NavLink,
} from "./Navigation-Styles";

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);

  // selector function is passed into it. (selector function extracts off values from redux store)
  //selector updates whenever state object changes

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  // const { isCartOpen } = useContext(CartContext);

  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <DresshuupLogo className="logo" />
        </LogoContainer>
        <LinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {
            // sign out if current user, else sign in
            currentUser ? (
              <NavLink as="span" onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to="/auth">SIGN IN</NavLink>
            )
          }
          <CartIcon />
        </LinksContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
