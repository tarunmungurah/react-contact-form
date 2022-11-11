import React, { useState } from "react";

function EvenOdd(){
  const [number, setNumber] = useState('');
  const [isSubmitted, setisSubmitted] = useState(false);

  const numValidation=()=>{
    if(number % 2 === 0) {
        alert("The number is even.");
    }   
    // if the number is odd
    else {
        alert("The number is odd.");
    }
};

  function OnChangeNumber(text) {
    console.log(text.target.value);
    setNumber(text.target.value);
  }

  function OnSubmitForm() {
    numValidation()
    setisSubmitted(true);
    
  }
    return (
        <div className="container mt-5">
      <form onSubmit>
        <div className="mb-3">
          <label className="form-label" htmlFor="number">
           Input number
          </label>
          <input className="form-control" type="text" id="number" onChange={OnChangeNumber} value={number} required />
          {isSubmitted && number === '' && <p> This field is required </p>}
        </div>
        <button className="btn btn-danger" onClick={OnSubmitForm}>
          SUBMIT
        </button>
        </form>
    </div>
    )
}


export default EvenOdd;