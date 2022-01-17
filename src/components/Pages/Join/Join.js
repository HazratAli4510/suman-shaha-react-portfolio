import * as React from 'react';
import Header from '../../Global/Header/Header'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Join.css'
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Join = () => {

    document.title = 'Join - Suman Shaha'

    const [password, setPassword] = useState()
    const [reTypePassword, setReTypePassword] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [isMailSent, setisMailSent] = useState()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const { signInWithGoogle, signUpWithEmail, signInViaFacebook } = useAuth()



    const handleJoin = (e) => {
        e.preventDefault()
        if (password !== reTypePassword) {
            return setError('Password does not matched!')
        }
        else if (password.length < 6) {
            return setError('Password should be 6 digit')
        }
        else {
            setError('')
        }
        signUpWithEmail(email, reTypePassword, setError, name, setisMailSent, navigate)
    }


    return (
        <section id='join'>
            <Header />
            <div className="container">
                <div className="form-container flex-column d-flex align-items-center justify-content-center">
                    <div className="form-title">
                        <h3>Register Here</h3>
                    </div>
                    <div className="box">
                        <form onSubmit={handleJoin}>
                            <Box
                                component="div"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '20rem' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <TextField
                                        required
                                        onChange={(e) => setName(e.target.value)}
                                        label="Name"
                                        placeholder="Enter your name"
                                        variant="standard"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        required
                                        onChange={e => setEmail(e.target.value)}
                                        label="Email"
                                        placeholder="Enter your email"
                                        variant="standard"
                                        type='email'
                                    />
                                </div>
                                <div>
                                    <TextField
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                        label="Password"
                                        placeholder="Enter a password"
                                        type="password"
                                        variant="standard"

                                    />
                                </div>
                                <div>
                                    <TextField
                                        required
                                        onChange={(e) => setReTypePassword(e.target.value)}
                                        label="Retype your Password"
                                        placeholder="Retype your password"
                                        variant="standard"
                                        type="password"
                                    />
                                </div>
                                <input id='form-submit' type="submit" value="Register" />

                                <span className='d-block mt-2'>Or Login With</span>
                                <div className="socail-logins">
                                    <ul className='d-flex justify-content-center align-items-center'>
                                        <li><button onClick={() => signInWithGoogle()} type='button' className='btn google shadow-none'><i className="fab fa-google"></i></button></li>

                                        <li><button onClick={signInViaFacebook} type='button' className='btn facebook shadow-none'><i className="fab fa-facebook-f"></i></button></li>

                                        <li><button type='button' className='btn twitter shadow-none'><i className="fab fa-twitter"></i></button></li>
                                    </ul>
                                </div>
                                <div className="errMsg">
                                    {
                                        error && <span className='text-danger'>{
                                            error === "auth/email-already-in-use" ? 'Email Already Registered' : error
                                        }</span>
                                    }
                                </div>
                                <div className="Verification Email">
                                    {
                                        isMailSent && <span style={{
                                            color: '#7600AD'
                                        }}>Your account has been created. <br /> <strong>Please check your e-mail for verification</strong> <br /> redirecting to login page... </span>
                                    }
                                </div>
                            </Box>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Join;