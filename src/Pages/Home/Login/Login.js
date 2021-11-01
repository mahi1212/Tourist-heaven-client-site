import React from 'react';
import './Login.css'
import photo from '../../../Images/login.png'
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle, user} = useAuth()
    console.log(user)
    return (
        <div className='login-page'>
            <div className='login-form'>
                <img src={photo} style={{width: '350px', borderRadius:'10px'}} alt="" />
                <button onClick={signInUsingGoogle}><i className="fab fa-google px-2 text-primary"></i>Login using GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;