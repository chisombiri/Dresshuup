import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as DresshuupLogo } from "../../assets/dresshuup.svg";
import { UserContext } from "../../contexts/user-context";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/Cart-Icon/Cart-Icon";
import CartDropDown from "../../components/CartDropDown/CartDropDown";
import './Navigation.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <DresshuupLogo className="logo"/>
            </Link>
            <div className="links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
                {
                    // sign out if current user, else sign in
                    currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                    ) : 
                    (
                        <Link className="nav-link" to='/auth'>
                            SIGN IN
                        </Link>
                    )
                }
                <CartIcon />
            </div>
            <CartDropDown />
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;