import { useState, useContext } from "react";
import { createUserFromAuth, signInWithGooglePopup, signInAuthUserFromEmailAndPassword } from "../../utils/Firebase/Firebase.component";
import FormInput from "../form-inputs/form-input.component";
import "./SignInForm.style.scss"
import Button, {buttonCategory} from "../Button/Button.component";
// import { UserContext } from "../../context/user.context";

import { useDispatch } from "react-redux";
import { userGoogleSigninStart, userEmailSigninStart } from "../../Redux Store/user/User.action";

const defaultInputFeild = {
    email:'',
    password:'',
}

const SignInForm = () => {
    // const { setCurrentUser } = useContext(UserContext);
    const dispatch = useDispatch();
    const SignInWithGooogle = async () => {
        // await signInWithGooglePopup();
        dispatch(userGoogleSigninStart());
    }

    const [formFeilds, setFormFeilds] = useState(defaultInputFeild);
    const {email, password } = formFeilds;

    const resetformfields = () => {
        setFormFeilds(defaultInputFeild);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            dispatch(userEmailSigninStart(email, password));
            // const {user} = await signInAuthUserFromEmailAndPassword(email, password);
            // setCurrentUser(user);
            resetformfields();
        }

        catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert("Wrong-Password");
                    break;
                case 'auth/user-not-found':
                    alert("No User Found");
                    break;
                default:
                    alert("Some error occured! Try in some time.");
                    break;
            }
        }
    }

    const handleChange =(event) => {
        const {name, value} = event.target;
        setFormFeilds({...formFeilds, [name]:value});
    }
return(
    <div className="sign-in-container">
    <h2>Already have an account?</h2>
    <span>Sign in with email and password</span>
    <form onSubmit={handleSubmit}>

        <FormInput
        label="Email" 
        type="email" 
        required 
        onChange={handleChange} 
        name="email" 
        value={email}/>

        <FormInput
        label="Password" 
        type="password" 
        required 
        onChange={handleChange} 
        name="password" 
        value={password}/>

        <div className="btn-container">
            <Button type="submit">Sign in</Button>
            <Button buttonType={buttonCategory.google} type="button" onClick={SignInWithGooogle}>Google Sign In</Button>
        </div>

    </form>
    </div>
)
}

export default SignInForm;