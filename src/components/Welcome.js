import React, {useState, useEffect} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase"
import { useNavigate} from "react-router-dom";
import "../components/welcome.css";

export default function Welcome() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                navigate('/homepage')
            }
        })
    },[])
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

    }
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/homepage')
        })
        .catch((err) => alert(err.message));
    }
    const handleRegister =() =>{
        navigate('/register')
    }

  return (
    <div className='Welcome'>
      <h1>Log In</h1>
      <div className='login-register-container'>
        <input 
        type="email"
        placeholder='Enter Email...'
        onChange={handleEmailChange}
        value={email}
         />
        <input 
        type="password"
        placeholder='Enter Password...'
        onChange={handlePasswordChange}
        value={password} 
        />
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleRegister}>Create an Account</button>
      </div>
    </div>
  )
}