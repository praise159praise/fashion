import React, { useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db, getCurrUserId } from '../fireConfig'
import '../styles/login.css'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'


const Login = (props) => {
    const [loggingIn, setLoggingIn] = useState(true)
    const [signingUp, setSigningUp] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
   

    
   function handleEmail(event) { setEmail(event.target.value ); }
   function handlePassword(event) { setPassword(event.target.value ); }


    function handleCreateUser(e) {
        e.preventDefault();
        

        createUserWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                console.log('user created: ', cred.user)

                
                const userRef = doc(db, 'userdata', cred.user.uid)

                setDoc(userRef, {isVendor : false}, { email : email} )
                
                e.target.reset()
            })
            .catch((err) => {
                setError(err.message)
                console.log(err)
            })
    }
    function handleLogin(e) {
        e.preventDefault();
        

        signInWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                console.log('user created: ', cred.user)
                
                e.target.reset()
            })
            .catch((err) => {
                setError(err.message)
                console.log(err)
            })
    }

    return (
        <>
            <p className='heading'>SUAVE{props.email}</p>
            <div className='login'>
                <div className="image"></div>
                {loggingIn &&
                    <form action="" method='' onSubmit={handleLogin}>
                        {!!error && <p>{error}</p>}
                        <h1>Log In</h1>

                        <div className="email">
                            <label for='email'>Login with email</label>
                            <input type="email" name="email" id="email" onChange={handleEmail}  placeholder='Email'/>
                        </div>
                        <div className="password">
                            <label for='password'>Password</label>
                            <input type="password" name="password" id="email" onChange={handlePassword} placeholder='Password' />
                        </div>
                        <div className='buttons'>
                            <button type="submit"><span>Log in</span></button>
                            <button onClick={() => {
                                setLoggingIn(!loggingIn)
                                setSigningUp(!signingUp)
                            }}> <span>Sign Up</span></button>
                        </div>
                    </form>}
                {signingUp &&
                    <form action="" method='' onSubmit={handleCreateUser}>
                        <h1>Sign Up</h1>

                        <div className="email">
                            <label for='email'>Sign Up with email</label>
                            <input type="email" name="email" id="" placeholder='Email' onChange={handleEmail}/>
                        </div>
                        <div className="password">
                            <label for='password'>Password</label>
                            <input type="password" name="password" id="" placeholder='Password' onChange={handlePassword} />
                        </div>
                        <div className='buttons'>
                            <button type="submit" ><span>Sign up</span></button>
                            <button onClick={() => {
                                setLoggingIn(!loggingIn)
                                setSigningUp(!signingUp)
                            }}> <span>Login</span></button>
                        </div>
                    </form>}
            </div>
        </  >
    )
}

export default Login