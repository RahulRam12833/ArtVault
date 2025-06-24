import { useState} from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button,{BUTTON_TYPES} from "../button/button.component";


import { signInAuthUserWithEmailAndPassword } from "../../utilities/firebase/firebase.utils";
import {SignInFormContainer,ButtonsContainer} from './sign-in-form.styles';
import { googleSignInStart,emailSignInStart } from "../../store/user/user.action";
const defaultFormFields = {
    email: '',
    password: '',
} 

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            
            resetFormFields();
        } 
        catch (error) 
        {
            if(error.code === 'auth/invalid-credential') 
                {
                alert('Invalid credentials. Please try again.');
                console.error("Error signing in", error);
                 }
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        // Update the formFields state with the new value for the changed input
        setFormFields({ ...formFields, [name]: value });

    }

    return( 
        <SignInFormContainer> 
            <h2>Already have an account?</h2>
            <span>
                Sign In with your email and password
            </span>
            <form onSubmit={handleSubmit}>
                <FormInput label="E-mail" type="email" name="email" value={email} required onChange={handleChange} />
                <br />
                <FormInput label="Password" type="password" name="password" value={password} required onChange={handleChange}/>
                <br />
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPES.google} onClick={signInWithGoogle}>Google sign In</Button>
                </ButtonsContainer>
                
            </form>
        </SignInFormContainer>
    )
}

export default SignInForm;