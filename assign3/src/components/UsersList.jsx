import React from "react";
import { Link } from "react-router-dom";

function UserDisplay(props) {
  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <td>User Id</td>
            <td>User Name</td>
            <td>Address</td>
            <td>MobileNo</td>
            <td>Password</td>
          </tr>
        </thead>
        <tbody>
          {props.map((value) => {
            return (
              <tr>
                <td>{value.Id}</td>
                <td>{value.Name}</td>
                <td>{value.Address}</td>
                <td>{value.MobileNo}</td>
                <td>{value.Password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
const UsersList = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
        <h5 className="navbar-brand text-white">The Hotel Piece |</h5>
        <Link to="/">
          <h5 className="navbar-brand text-white">Home</h5>
        </Link>
        <Link to="/AdminHome">
          <h5 className="navbar-brand text-white">Admin Dashboard</h5>
        </Link>
        <Link to="/HotelMaster">
          <h5 className="navbar-brand text-white">Hotel Master</h5>
        </Link>
        <Link to="/BookingList">
          <h5 className="navbar-brand text-white">Bookings</h5>
        </Link>
        <Link to="/CanceledBookingList">
          <h5 className="navbar-brand text-white">Canceled Bookings</h5>
        </Link>
      </nav>

      <div align="center" className="m-5">
        <h1>User List</h1>
      </div>
      <div>
        {UserDisplay(props.usersData)}
        <hr></hr>
      </div>
    </div>
  );
};

export default UsersList;
