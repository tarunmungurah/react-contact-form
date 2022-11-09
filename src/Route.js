import React from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";


function RouteFormation(){
return <div>
 
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>

</div>
}

export default RouteFormation;

