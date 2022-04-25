import SignUpForm from '../../components/Sign-up-form/Sign-up-form';
import SignInForm from '../../components/Sign-in-form copy/Sign-in-form';
import "./Authentication.scss";

const Authentication = () => {

    return(
        <div className='authentication-containers'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;