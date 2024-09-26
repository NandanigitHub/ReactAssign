import React from "react";
import { Link } from "react-router-dom";

function HotelDisplay(props) {
  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <td>Hotel Id</td>
            <td>Name</td>
            <td>Address</td>
            <td>Rating</td>
          </tr>
        </thead>
        <tbody>
          {props.map((value) => {
            return (
              <tr>
                <td>{value.Id}</td>
                <td>{value.Name}</td>
                <td>{value.Address}</td>
                <td>{value.Rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
const HotelList = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
        <h5 className="navbar-brand text-white">The Hotel Piece </h5>
        <Link to="/">
          <h5 className="navbar-brand text-white">Home </h5>
        </Link>
        <Link to="/UserHome">
          <h5 className="navbar-brand text-white">User Home </h5>
        </Link>
        <Link to="/BookTable">
          <h5 className="navbar-brand text-white">Booking </h5>
        </Link>
      </nav>

      <div></div>
      <div align="center" className="m-5">
        <h1>Hotel List</h1>
      </div>
      <div>
        {HotelDisplay(props.hotelData)}
        <hr></hr>
      </div>
    </div>
  );
};

export default HotelList;
