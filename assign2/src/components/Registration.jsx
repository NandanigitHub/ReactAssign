import React, { useState } from "react";

const Registration = () => {
  function Show() {
    
    if (password == passwordAgain) {
      return (
        <div>
          {console.log(`First Name: ${fname}`)}
          {console.log(`Last Name: ${lname}`)}
          {console.log(`email: ${email}`)}
          {console.log(`password: ${password}`)}
        </div>
      );
    }
    else{
        let promptName = prompt(
            `Password and Confirm Password does not Match`,
            `${fname} ${lname}`
          );
      
    }
  }

  function SetEmail(e) {
    setEmail(e.target.value);
  }

  function SetPassword(e) {
    setPassword(e.target.value);
  }

  function SetPasswordAgain(e) {
    setPasswordAgain(e.target.value);
  }

  const Setfname = (e) => {
    setfname(e.target.value);
  };

  const Setlname = (e) => {
    setlname(e.target.value);
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordAgain, setPasswordAgain] = useState();
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  return (
    <div className="m-3">
      <div className="m-3"><h1 align="center">Registration Form</h1></div>
      <div className="formSetup m-3">
        <div className="input-group mb-3">
          <span className="input-group-text">First Name</span>
          <input
            onChange={Setfname}
            type="text"
            aria-label="First name"
            className="form-control"
          />
          <span className="input-group-text">Last Name</span>
          <input
            onChange={Setlname}
            type="text"
            aria-label="Last name"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={SetEmail}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">
            Password
          </label>
          <input
            onChange={SetPassword}
            type="password"
            className="form-control"
            id="exampleInputPassword"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            onChange={SetPasswordAgain}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button onClick={Show} type="button" className="btn btn-success">
          Register
        </button>
      </div>
    </div>
  );
};

export default Registration;
