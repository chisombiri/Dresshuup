import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as DresshuupLogo } from "../../assets/dresshuup.svg";
import { UserContext } from "../../contexts/user-context";
import { signOutUser } from "../../utils/firebase/firebase";
import './Navigation.scss';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

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
                        <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                    ) : 
                    (
                        <Link className="nav-link" to='/auth'>
                            SIGN IN
                        </Link>
                    )
                }
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;