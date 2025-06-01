import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utilities/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/SignUpForm';

    const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm />
        </>
    )
}

export default SignIn;