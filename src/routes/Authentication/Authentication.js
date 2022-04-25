import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import SignUpForm from '../../components/Sign-up-form/Sign-up-form';
import SignInForm from '../../components/Sign-in-form copy/Sign-in-form';

const Authentication = () => {
    
    return(
        <div>
            <h1>Sign In Page</h1>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;