import { useState } from "react";


import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { createAuthUserWithEmailAndPwd ,createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utils";

import {SignUpFormContainer} from './sign-up-form.styles';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            // Create a new user with email and password
            const { user } = await createAuthUserWithEmailAndPwd(email, password);
            // You can add additional logic here, like creating a user document in Firestore
            await createUserDocumentFromAuth(user, { displayName });

            
            // Reset the form fields after successful signup
            resetFormFields();
        } catch (error) {
           if(error.code === 'auth/email-already-in-use') {
                alert('Email already in use. Please use a different email.');
            }
            else{
                console.error("Error creating user", error);
            }
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        // Update the formFields state with the new value for the changed input
        setFormFields({ ...formFields, [name]: value });

    }

    return( 
        <SignUpFormContainer> 
            <h2>Don't have an account?</h2>
            <span>
                Sign Up with your email and password
            </span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" name="displayName" value={displayName} onChange={handleChange} required />
                <br />
                <FormInput label="E-mail" type="email" name="email" value={email} required onChange={handleChange} />
                <br />
                <FormInput label="Password" type="password" name="password" value={password} required onChange={handleChange}/>
                <br />
                <FormInput label="Confirm Password" type="password" name="confirmPassword" value={confirmPassword} required onChange={handleChange}/>
                <br/>
                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpFormContainer>
    )
}

export default SignUpForm;