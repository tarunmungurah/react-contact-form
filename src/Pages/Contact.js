import React, { useState } from 'react';

function Contact() {
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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


  function OnChangeSurname(text) {
    console.log(text.target.value);
    setSurname(text.target.value);
  }

  function OnChangeName(text) {
    console.log(text.target.value);
    setName(text.target.value);
  }

  function OnChangeEmail(text) {
    console.log(text.target.value);
    setEmail(text.target.value);
  }

  function OnSubmitForm(e) {
    emailValidation()
    setisSubmitted(true);
    
  }

  return (
    <div className="container mt-5">
      <form onSubmit>
        <div className="mb-3">
          <label className="form-label" htmlFor="surname">
            Surname
          </label>
          <input
            className="form-control"
            type="text"
            id="surname"
            onChange={OnChangeSurname}
            value={surname}
            required
          />
          {isSubmitted && surname === '' && <p> This field is required </p>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            onChange={OnChangeName}
            value={name}
            required
          />
          {isSubmitted && name === '' && <p> This field is required </p>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            onChange={OnChangeEmail}
            value={email}
            required
          />
          {isSubmitted && email === '' && <p> This field is required </p>}
          {message}

          {/*Lorsque je tape un mauvais format d'e-mail, je n'ai pas reçu le
          message d'erreur, vous devez ajouter*/}
        </div>

        <button className="btn btn-danger" onClick={OnSubmitForm}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Contact;
