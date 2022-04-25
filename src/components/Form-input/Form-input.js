import "./Form-input.scss"

const FormInput = ({ label, ...otherProps }) => {
    return(
        <div className="group">
            <input className="form-input" {...otherProps} />
            {label && (
                <label className={`${otherProps.value.length > 0 ? "shrink" : null} form-input-label`}>{label}</label>
            )}
        </div>
    )
}

export default FormInput;