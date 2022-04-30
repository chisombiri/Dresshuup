import { useState } from "react";
import FormInput from "../Form-input/Form-input";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword  } from "../../utils/firebase/firebase";
import Button, { button_type_classes } from "../Button/Button";
import "./sign-in-form.scss";
import { ReactComponent as GoogleLogo } from "../../assets/google.svg";

//initial state for all the form fields
const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // console.log(formFields);

    const handleChange = (e) => {
        const { name, value } = e.target;
        //Update one input, other fields previously on state will be spread
        //Apply value from variable of name
        setFormFields({...formFields, [name]: value})
    };

    //reset form fields upon successful creation
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            
            resetFormFields();

        } catch (error) {
            if(error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                alert('Please check for correct email or password');
            } else{
                console.log('Error encounted creating user', error);
            }
        }
    }
 
    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign In with preferred method</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="email" name="email" value={email} onChange={handleChange} required/>

                <FormInput label="Password" type="password" minLength="8" name="password" value={password} onChange={handleChange} required/>

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={button_type_classes.google} onClick={signInWithGoogle}> 
                    <GoogleLogo/> Google
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;