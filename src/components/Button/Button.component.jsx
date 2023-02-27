import {BaseButton, GoogleSignInButton, InvetredButton, ButtonSpinner} from "./Button.style.jsx"

export const buttonCategory = {
    base: 'base',
    google:'google-signIn',
    inverted:'inverted'
}

const getButton =(buttontype=buttonCategory.base) => (
    {
        [buttonCategory.base]: BaseButton,
        [buttonCategory.google]: GoogleSignInButton,
        [buttonCategory.inverted] : InvetredButton
    }[buttontype]
)
const Button = ({children, isProcessing, buttonType, ...otherprops}) => {
    const CustomButton = getButton(buttonType);
    return(
        <CustomButton disabled={isProcessing} {...otherprops}>
            {isProcessing ? <ButtonSpinner /> : children}
        </CustomButton>
    )
}

export default Button;