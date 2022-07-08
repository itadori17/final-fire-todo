import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function Register() {
    
   
    const navigate = useNavigate();
    const [registerInformation, setRegisterInformation] = useState({
        email: " ",
        confirmEmail: "",
        password: "",
        confirmPassword:"",
    })

    const handleBack =() => {
        navigate('/')
    }
    const handleRegister = () => {
        if(registerInformation.email !== registerInformation.confirmEmail  ){
            alert("Email  doen not match")
            return
        }else if (registerInformation.password !== registerInformation.confirmPassword){
            alert(" Password doen not match")
            return
        }
        createUserWithEmailAndPassword(auth, registerInformation.email, registerInformation.password).then(() => {
            navigate('/');
        })
        .catch((err) => alert(err.message));

    };

  return (
    <div>
        <h1>Register</h1>
         <input
              type="email"
              placeholder="Email"
              value={registerInformation.email}
              onChange={(e) => 
              setRegisterInformation({...registerInformation, email: e.target.value})} />
            
            
            <input
              type="email"
              placeholder="Confirm Email"
              value={registerInformation.confirmEmail}
              onChange={(e) => 
              setRegisterInformation({...registerInformation, confirmEmail: e.target.value})} />
            
          
            <input
              type="password"
              placeholder="Password"
              value={registerInformation.password}
              onChange={(e) => 
                setRegisterInformation({...registerInformation, password: e.target.value})} />
              
            
            <input
              type="password"
              placeholder="Confirm Password"
              value={registerInformation.confirmPassword}
              onChange={(e) => 
                setRegisterInformation({...registerInformation, confirmPassword: e.target.value})} />
              
            <button className="sign-in-register-button" onClick={handleRegister}>Register</button>
            <button className="create-account-button" onClick={ handleBack}>Go back</button>
      
    </div>
  )
}