import { Button } from '@mui/material';
import React from 'react';
import styles from "./Login.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
const Login = () => {
    const facebook=()=>{
        console.log('clicked');
    }
    const google=()=>{
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