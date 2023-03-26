import React, { useState } from "react";
import "./style.css"
import Login from "./component/Login";
import Register from "./component/Register";
import { Route, Routes } from "react-router-dom";
import Admin from "./component/Admin";
import Movie from "./component/Movies";
import BookTickets from "./component/BookTickets";
import Theater from "./component/Threaters";
import Seats from "./component/seats";
import Payment from "./component/payment";
import Food from "./component/Food";
import PaymentCart from "./component/PaymentCart";
import Nav from "./component/Nav";
import FinalBooking from "./component/finalBooking";
import Adminlogin from "./component/Adminlogin";
import AdminRegistration from "./component/AdminRegistration";

function App() {
  const [userData, setLoginData] = useState({});
  const [admin, setAdmin] = useState({});

  return (
    <>

      <Nav />
      <Routes>
        {
          userData && userData._id ? <Route path="/movie" element={<Movie />} /> : <Route path="/log" element={<Login loginUser={setLoginData} />} />
        }

        {
          admin && admin._id ? <Route path="/admin" element={<Admin />} /> : <Route path="/adminlogin" element={<Adminlogin loginAdmin={setAdmin} />} />
        }


        <Route path="/log" element={<Login />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminRegistration" element={<AdminRegistration />} />
        <Route path="/food" element={<Food />} />
        <Route path="/BookTickets/:id" element={<BookTickets />} />
        <Route path="/theater/:movie_name" element={<Theater />} />
        <Route path="/seats/:movie_name" element={<Seats />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentCart" element={<PaymentCart />} />
        <Route path="/finalBooking" element={<FinalBooking />} />
      </Routes>


    </>
  );
}

export default App;
