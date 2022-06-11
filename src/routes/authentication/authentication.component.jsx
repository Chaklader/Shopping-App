import React from 'react';

import {useEffect} from "react";
import {getRedirectResult} from 'firebase/auth';

import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './authentication.styles.scss';

const Authentication = () => {

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await getRedirectResult(auth);
    //
    //         if(response){
    //             const userDocRef =  await createUserDocumentFromAuth(response.user);
    //         }
    //
    //     }
    //     fetchData();
    // }, []);
    
    
    
    // const logGoogleUser = async ()=>{
    //     const {user} = await signInWithGooglePopup();
    //
    //     const userDocRef =  await createUserDocumentFromAuth(user);
    // }

    // const logGoogleRedirectUser = async ()=>{
    //     const {user} = await signInWithGoogleRedirect();
    //
    //     console.log(user)
    // }


    return (
        <div className="authentication-container">
            {/*<button onClick={logGoogleUser}>Sign In with Google Popup</button>*/}
            <SignInForm/>
            <SignUpForm/>
            {/*<button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button>*/}
        </div>
    );
};

export default Authentication;
