import { useState, useContext} from "react";


import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";  

import { signInWithGooglePopup ,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword } from "../../utilities/firebase/firebase.utils";
import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
} 

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        setCurrentUser(user);
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
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