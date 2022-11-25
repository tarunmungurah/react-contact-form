import React, { useEffect, useState }from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setisSubmitted] = useState(false);
  const [error, setError] = React.useState('');

  const[message_email, setMessageEmail] = useState('');
  const[message_password, setMessagePassword] = useState('');
  const navigate = useNavigate();


  const emailValidation=()=>{
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    // if(regEx.test(email)){ 
    //   setMessage("Email is Valid")
    if(!regEx.test(email) && email !==  ""){
      setMessageEmail("Email is not valid");
    }
    else{
      setMessageEmail("");
    }
  };

//   const passwordValidation=()=>{
//     const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g
//     if(!regEx.test(password) && password !==  ""){
//         setMessagePassword("Password is not valid");
//       }else{
//         setMessagePassword("");
//       }
//   };

  function OnChangeEmail(text) {
    console.log(text.target.value);
    setEmail(text.target.value);
    setError('');
  }

  function OnChangePassword(text) {
    console.log(text.target.value);
    setPassword(text.target.value);
  }

  function OnSubmitForm(e) {
    emailValidation()
    // passwordValidation()
    setisSubmitted(true);
    e.preventDefault();
    const payload = {
      identifier:email,
      password:password
    }
    axios.post(
      'https://bat-recup-staging-backend.cleverapps.io/api/users-permissions/login-annuaire' , payload
    )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('token', res?.data?.jwt)
        navigate('/Dashboard')
      })
      .catch((err) => {
        console.log(err?.response?.data?.error)
        if (err.code === 'ERR_BAD_REQUEST') 

        setError('Invalid identifier or password');
        console.log(err)
      })
  }

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input
                            type="email"
                            id="email"
                            onChange={OnChangeEmail}
                            value={email}
                            required
                            className="login__input"
                            placeholder="Email"/>
                        <p className="msg_email">{message_email}</p>

                        </div>
                        {isSubmitted && email === '' && <p className="required"> This field is required </p>}

                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input 
                            type="password" 
                            id="password"
                            onChange={OnChangePassword}
                            value={password}
                            required
                            className="login__input"
                            placeholder="Password"/>
                            
                        <p>{message_password}</p>
                        {isSubmitted && password === '' && <p className="required"> This field is required </p>}
                        </div>
                        <p>{error}</p>

                        <button className="button login__submit" onClick={OnSubmitForm}>
                            <span className="button__text">Log In Now</span >
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>				
                    </form>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>		
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>		
            </div>
        </div>
    );
}

export default Login;