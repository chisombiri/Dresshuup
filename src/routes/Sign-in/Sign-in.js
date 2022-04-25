import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import SignUp from '../../components/Sign-up-form/Sign-up-form';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Popup</button>
            <SignUp />
        </div>
    )
}

export default SignIn;