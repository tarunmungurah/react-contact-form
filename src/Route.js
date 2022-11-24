import React from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import EvenOdd from "./Pages/EvenOdd";
import FetchData from "./Pages/FetchData";
import FetchDatabyId from "./Pages/FetchDatabyId";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";


function RouteFormation(){
return <div>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/evenodd' element={<EvenOdd />} />
        <Route path='/fetchdata' element={<FetchData />} />
        <Route path ='/fetchdatabyid/:id' element={<FetchDatabyId />} />
        <Route path ='/login' element={<Login />} />
        <Route path ='/dashboard' element={<Dashboard />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
</div>
}

export default RouteFormation;

