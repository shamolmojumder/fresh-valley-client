import { Button } from '@mui/material';
import React, { useContext } from 'react';
import styles from "./Login.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

import firebaseConfig from './firebase.Config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { UserContext } from '../../App';



firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext)
    const facebook=()=>{
        console.log("facebook");
    }
    const google=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            setLoggedInUser(user)
            console.log(user);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
        console.log('google');
    }
    return (
        <div className={styles.container}>
            <Button onClick={facebook} startIcon={<FacebookIcon />}  variant="outlined">  Continue with Facebook</Button>
            <br />
            <Button onClick={google} color="success"  startIcon={<GoogleIcon />}  variant="outlined">  Continue with Google</Button>
          </div>
    );
};

export default Login;