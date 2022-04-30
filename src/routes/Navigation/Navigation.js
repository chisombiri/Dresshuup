import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as DresshuupLogo } from "../../assets/dresshuup.svg";
import { UserContext } from "../../contexts/user-context";
import { CartContext } from "../../contexts/cart-context";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/Cart-Icon/Cart-Icon";
import CartDropDown from "../../components/CartDropDown/CartDropDown";
import {NavigationContainer, LinksContainer, LogoContainer, NavLink} from './Navigation-Styles.js';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <DresshuupLogo className="logo"/>
            </LogoContainer>
            <LinksContainer>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {
                    // sign out if current user, else sign in
                    currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    ) : 
                    (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )
                }
                <CartIcon />
            </LinksContainer>
            {isCartOpen && <CartDropDown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;