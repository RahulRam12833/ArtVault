import { useState } from "react";

import { signInWithGooglePopup ,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword } from "../../utilities/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import Button from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: '',
} 

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log("User signed in successfully", response);
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
        <div className="sign-up-container"> 
            <h2>Already have an account?</h2>
            <span>
                Sign In with your email and password
            </span>
            <form onSubmit={handleSubmit}>
                <FormInput label="E-mail" type="email" name="email" value={email} required onChange={handleChange} />
                <br />
                <FormInput label="Password" type="password" name="password" value={password} required onChange={handleChange}/>
                <br />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google sign In</Button>
                </div>
                
            </form>
        </div>
    )
}

export default SignInForm;