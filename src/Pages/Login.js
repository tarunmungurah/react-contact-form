import React, { useState } from "react";

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setisSubmitted] = useState(false);

  const[message, setMessage] = useState('');

  const emailValidation=()=>{
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    // if(regEx.test(email)){ 
    //   setMessage("Email is Valid")
     if(!regEx.test(email) && email !==  ""){
      setMessage("Email is not valid");
    }else{
      setMessage("");
    }
  };

  function OnChangeEmail(text) {
    console.log(text.target.value);
    setEmail(text.target.value);
  }

  function OnChangePassword(text) {
    console.log(text.target.value);
    setPassword(text.target.value);
  }

  function OnSubmitForm(e) {
    emailValidation()
    setisSubmitted(true);
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
                </div>
                {isSubmitted && email === '' && <p className="required"> This field is required </p>}
                {message}

				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" 
                     id="password"
                     onChange={OnChangePassword}
                     value={password}
                     required
                    className="login__input"
                    placeholder="Password"/>
				</div>
                {isSubmitted && password === '' && <p className="required"> This field is required </p>}

				<button class="button login__submit" onClick={OnSubmitForm}>
				    <span class="button__text">Log In Now</span >
				    <i class="button__icon fas fa-chevron-right"></i>
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