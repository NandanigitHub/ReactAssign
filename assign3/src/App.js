import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdminHome from "./components/AdminHome";
import AdminLogin from "./components/AdminLogin";
import AdminRegistration from "./components/AdminRegistration";
import BookingList from "./components/BookingList";
import BookTable from "./components/BookTable";
import CanceledBookingList from "./components/CanceledBookingList";
import Home from "./components/Home";
import HotelList from "./components/HotelList";
import HotelMaster from "./components/HotelMaster";
// import UpdateHotel from "./components/UpdateHotel";
import UserHome from "./components/UserHome";
import UserRegistration from "./components/UserRegistration";
import UsersList from "./components/UsersList";

function App() {
  const hotelData=[
    {
      Id:1,
      Name:"Nandani",
      Address:"Pune",
      Rating:4,
    },
    {
      Id:2,
      Name:"Shiva",
      Address:"Satara",
      Rating:5,
    },
    {
      Id:3,
      Name:"Priyanka",
      Address:"Karad",
      Rating:3,
    },
    {
      Id:4,
      Name:"Sai",
      Address:"Mumbai",
      Rating:3,
    },
  ]

  const bookingData=[
    {
      UId:1,
      Id:1,
      Name:"Nandani",
      No_Of_Table:4,
    },
    {
      UId:2,
      Id:1,
      Name:"Priyanka",
      No_Of_Table:5,
    },
    {
      UId:3,
      Id:1,
      Name:"shivam",
      No_Of_Table:2,
    },
    {
      UId:1,
      Id:2,
      Name:"shivtaj",
      No_Of_Table:4,
    },
  ]

  const usersData=[
    {
      Id:1,
      Name:"Ram",
      Address:"Pune",
      MobileNo:9435464789,
      Password:123
    },
    {
      Id:2,
      Name:"Raj",
      Address:"mumbai",
      MobileNo:9935464789,
      Password:654
    },
    {
      Id:3,
      Name:"Shivraj",
      Address:"Pune",
      MobileNo:8835464789,
      Password:456
    },
    {
      Id:4,
      Name:"Shiv",
      Address:"satara",
      MobileNo:9435464999,
      Password:567
    },
  ]

  const canceledbookingData=[
    {
      UId:1,
      Id:1,
      Name:"Rahul",
      No_Of_Table:4,
    },
    {
      UId:2,
      Id:1,
      Name:"Pankaj",
      No_Of_Table:5,
    },
    {
      UId:3,
      Id:1,
      Name:"Roshan",
      No_Of_Table:2,
    },
    {
      UId:1,
      Id:2,
      Name:"Raj",
      No_Of_Table:4,
    },
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AdminHome" element={<AdminHome />}></Route>
        <Route path="/UserHome" element={<UserHome />}></Route>
        <Route path="/UserRegistration" element={<UserRegistration />}></Route>
        <Route path="/AdminRegistration" element={<AdminRegistration />}></Route>
        <Route path="/AdminLogin" element={<AdminLogin />}></Route>
        <Route path="/HotelMaster" element={<HotelMaster hotelData={hotelData}/>}></Route>
        {/* <Route path="/UpdateHotel" element={<UpdateHotel />}></Route> */}
        <Route path="/HotelList" element={<HotelList hotelData={hotelData}/>}></Route>
        <Route path="/BookTable" element={<BookTable bookingData={bookingData} />}></Route>
        <Route path="/BookingList" element={<BookingList bookingData={bookingData}/>}></Route>
        <Route path="/CanceledBookingList" element={<CanceledBookingList canceledbookingData={canceledbookingData}/>}></Route>
        <Route path="/UsersList" element={<UsersList usersData={usersData}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
