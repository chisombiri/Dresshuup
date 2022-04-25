import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase"

//initial state for all the form fields
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields);

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
        <div>
            <h2>Sign Up with email and password</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="displayName" value={displayName} onChange={handleChange} required/>

                <label>Email</label>
                <input type="email" name="email" value={email} onChange={handleChange} required/>

                <label>Password</label>
                <input type="password" minLength="8" name="password" value={password} onChange={handleChange} required/>

                <label>Confirm Password</label>
                <input type="password" minLength="8" name="confirmPassword" value={confirmPassword} onChange={handleChange} required/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;