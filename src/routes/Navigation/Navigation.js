import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as DresshuupLogo } from "../../assets/dresshuup.svg";
import './Navigation.scss';

const Navigation = () => {
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <DresshuupLogo className="logo"/>
            </Link>
            <div className="links-container">
                <Link className="link" to='/shop'>
                    SHOP
                </Link>
                <Link className="link" to='/auth'>
                    SIGN IN
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;