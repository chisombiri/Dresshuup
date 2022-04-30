import {BaseButton, GoogleAuthButton, InvertedButton} from "./Button-Styles.js";

export const button_type_classes = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
};

//fucntion returns one of the 3 button types
const getButton = (buttonType = button_type_classes.base) => (
    {
        [button_type_classes.base]: BaseButton,
        [button_type_classes.google]: GoogleAuthButton,
        [button_type_classes.inverted]: InvertedButton
    }[buttonType]
);

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return(
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    )
}

export default Button;