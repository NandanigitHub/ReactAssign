import React from "react";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

function UserRegistration() {
  const [userId, setuserId] = useState("");
  const [username, setUserName] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  const [address, setaddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [userRegistrationArray, setuserRegistrationArray] = useState("");

  const onChangeuserId = (e) => {
    setuserId(e.target.value);
  };
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeMobileNo = (e) => {
    setmobileNo(e.target.value);
  };
  const onChangeAddress = (e) => {
    setaddress(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  function onSubmit() {
    localStorage.setItem("UserId", userId);
    localStorage.setItem("UserName", username);
    localStorage.setItem("Usermobile", mobileNo);
    localStorage.setItem("Useraddress", address);
    localStorage.setItem("Userpassword", password);

    window.alert("Registration Successful");
    navigate("/");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
        <h5 className="navbar-brand">The Hotel Piece |</h5>
        <Link to="/">
          <h5 className="navbar-brand text-white">Home</h5>
        </Link>
        <Link to="/AdminLogin">
          <h5 className="navbar-brand text-white">Admin</h5>
        </Link>
      </nav>

      <div className=" col d-flex justify-content-center m-2">
        <div className="border border-success p-5">
          <h3>User Registration </h3>
          <label className="m-1 row">User Id : </label>
          <input
            type="number"
            value={userId}
            onChange={onChangeuserId}
            className="m-1 row form-control"
            placeholder="Enter user-ID"
            required
          ></input>
          <label className="m-1 row">User Name : </label>
          <input
            type="text"
            value={username}
            onChange={onChangeUserName}
            className="m-1 row form-control"
            placeholder="Enter User name"
            required
          ></input>
          <label className="m-1 row">Address : </label>
          <input
            type="text"
            value={address}
            onChange={onChangeAddress}
            className="m-1 row form-control"
            placeholder="Enter Address"
            required
          ></input>
          <label className="m-1 row">Mobile No : </label>
          <input
            type="number"
            value={mobileNo}
            onChange={onChangeMobileNo}
            className="m-1 row form-control"
            placeholder="Enter Mobile No"
            required
          ></input>
          <label className="m-1 row">Password :</label>
          <input
            type="text"
            value={password}
            onChange={onChangePassword}
            className="m-1 row form-control"
            placeholder="Enter Password  "
            required
          ></input>
          <div className="text-center">
            <button
              className="row mt-2 btn btn-success row "
              onClick={onSubmit}
              type="submit"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
