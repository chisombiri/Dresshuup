import {BaseButton, GoogleAuthButton, InvertedButton} from "./Button-Styles.js";

const button_type_classes = {
    google: 'google-sign-in',
    inverted: 'inverted',
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return(
        <button 
        className={`button-container ${button_type_classes[buttonType]}`} 
        {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button;