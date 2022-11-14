import React, {
  useState
} from 'react';

function EvenOdd() {
  const [number, setNumber] = useState('');
  const [isSubmitted, setisSubmitted] = useState(false);

  const [message, setMessage] = useState('');


  const numValidation = () => {
    const regEx = /^-?\d+$/ //to check positive and negative number
    if (regEx.test(number) && number % 2 === 0) {
      setMessage('The number is even.');
    } else if (regEx.test(number) && number % 2 !== 0) {
      setMessage('The number is odd.');
    } else if (number === "") {
      setMessage('');
    } else {
      setMessage('Number format not good');
    }
  };



  function OnChangeNumber(text) {
    console.log(text.target.value);
    setNumber(text.target.value);
    setMessage('');
  }

  function OnSubmitForm(e) {
    numValidation();
    setisSubmitted(true);
    e.preventDefault(); // EMPECHE L'EVENEMET A PROPAGER , C POUR CELA QU'AVANT IL Y A LE REFRESH
  }
  return ( <
    div className = "container mt-5" >
    <
    form > {
      ' '
    } {
      /** enleve le on submit  car tu gere deja l'action avec le ONCLCIK*/
    } <
    div className = "mb-3" >
    <
    label className = "form-label"
    htmlFor = "number" >
    Input number <
    /label> <
    input className = "form-control"
    type = "text"
    id = "number"
    onChange = {
      OnChangeNumber
    }
    value = {
      number
    }
    required /
    >
    {
      isSubmitted && number === '' && < p > This field is required < /p>} {
      message
    } <
    /div> <
    button className = "btn btn-danger"
    onClick = {
      OnSubmitForm
    } >
    SUBMIT <
    /button> < /
    form > <
    /div>
  );
}

export default EvenOdd;