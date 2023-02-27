import SignUpForm from '../../components/SignUpForm/SignUpForm.component';
import SignInForm from '../../components/SignInForm/SignInForm.component';
import "./Authenticate.style.scss";

const Authenticate= () => { 

    return(
      <div className='authentication-container'>
        <SignInForm />
        <SignUpForm />
      </div>
    )
  }

export default Authenticate;