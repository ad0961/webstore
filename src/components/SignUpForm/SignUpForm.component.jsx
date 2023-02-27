import { useState, useContext } from "react";
import { createAuthUserFromEmailAndPassword, createUserFromAuth } from "../../utils/Firebase/Firebase.component";
import FormInput from "../form-inputs/form-input.component";
import "./SignUpForm.style.scss"
import Button from "../Button/Button.component";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../Redux Store/user/User.action";
// import { UserContext } from "../../context/user.context";

const defaultInputFeild = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = () => {
    const dispatch = useDispatch();
    // const { setCurrentUser } = useContext(UserContext);
    const [formFeilds, setFormFeilds] = useState(defaultInputFeild);
    const {displayName, email, password, confirmPassword } = formFeilds;

    const resetformfields = () => {
        setFormFeilds(defaultInputFeild);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (password != confirmPassword){
            alert("Passwords are not same!!!");
            return;
        }
        try{
            dispatch(signUpStart(email, password, displayName));
            // const {user} = await createAuthUserFromEmailAndPassword(email, password);
            // // setCurrentUser(user);
            // await createUserFromAuth(user, {displayName});
            resetformfields();
        }

        catch(error){
            if(error.code == "auth/email-already-in-use"){
                console.log("Email is already in use");
            }
            else{
                console.log(error);
            }
        }
    }

    const handleChange =(event) => {
        const {name, value} = event.target;
        setFormFeilds({...formFeilds, [name]:value});
    }
return(
    <div className="sign-up-container">
    <h2>Don't have an account?</h2>
    <span>Sign Up with email and password</span>
    <form onSubmit={handleSubmit}>
        <FormInput 
        label="Display name"
        type="text" 
        required 
        onChange={handleChange} 
        name="displayName" 
        value={displayName}/>

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

        <FormInput
        label="Confirm Password" 
        type="password" 
        required 
        onChange={handleChange} 
        name="confirmPassword" 
        value={confirmPassword}/>

        <Button type="submit">Sign up</Button>

    </form>
    </div>
)
}

export default SignUpForm;