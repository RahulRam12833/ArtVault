import { useState } from "react";


import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import toast from 'react-hot-toast';
import { createAuthUserWithEmailAndPwd ,createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utils";
import { updateProfile } from "firebase/auth";
import {SignUpFormContainer} from './sign-up-form.styles';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const navigate = useNavigate();
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
             toast.error('Passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPwd(email, password);

            await updateProfile(user, { displayName });

            await createUserDocumentFromAuth(user, {displayName });

            
            // Reset the form fields after successful signup
            resetFormFields();
           toast.success(`Welcome to ArtVault, ${displayName}!`);

            navigate('/shop');

        } catch (error) {
           if(error.code === 'auth/email-already-in-use') {
                toast.error('Email already in use.');
            }
            else{
                toast.error('Unable to create your account. Please try again.');
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
                
                <FormInput label="E-mail" type="email" name="email" value={email} required onChange={handleChange} />
                
                <FormInput label="Password" type="password" name="password" value={password} required onChange={handleChange}/>
                
                <FormInput label="Confirm Password" type="password" name="confirmPassword" value={confirmPassword} required onChange={handleChange}/>
                
                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpFormContainer>
    )
}

export default SignUpForm;