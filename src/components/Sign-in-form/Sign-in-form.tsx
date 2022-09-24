import { useState, FormEvent, ChangeEvent } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useDispatch } from "react-redux";

import FormInput from "../Form-input/Form-input";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user-action";
import Button, { button_type_classes } from "../Button/Button";
import "./sign-in-form.scss";
//const GoogleLogo = require("../../assets/google.svg") as string;
import { ReactComponent as GoogleLogo } from "../../assets/google.svg";

//initial state for all the form fields
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // console.log(formFields);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    //Update one input, other fields previously on state will be spread
    //Apply value from variable of name
    setFormFields({ ...formFields, [name]: value });
  };

  //reset form fields upon successful creation
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));

      resetFormFields();
    } catch (error) {
      if (
        (error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD ||
        (error as AuthError).code === AuthErrorCodes.USER_DELETED
      ) {
        alert("Please check for correct email or password");
      } else {
        console.log("Error encountered creating user", error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with preferred method</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={button_type_classes.google}
            onClick={signInWithGoogle}
          >
            <GoogleLogo /> Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
