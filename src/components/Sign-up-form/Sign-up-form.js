import { useState } from "react";
import FormInput from "../Form-input/Form-input";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import Button from "../Button/Button";
import "./Sign-up-form.scss";

//initial state for all the form fields
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    
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
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });

            resetFormFields();

        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Email already exists, cannot create user')
            } else{
                console.log('Error encounted creating user', error);
            }
        }
    }
 
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Username, e.g: chisombiri" type="text" name="displayName" value={displayName} onChange={handleChange} required/>

                <FormInput label="Email" type="email" name="email" value={email} onChange={handleChange} required/>

                <FormInput label="Password: 8 characters min" type="password" minLength="8" name="password" value={password} onChange={handleChange} required/>

                <FormInput label="Confirm Password: 8 characters min" type="password" minLength="8" name="confirmPassword" value={confirmPassword} onChange={handleChange} required/>

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;