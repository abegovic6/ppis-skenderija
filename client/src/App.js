import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "./views/login/Login";
import NavScrollExample from "./views/menu/NavScrollExample";
import {AuthProvider} from "./context";
import Home from "./views/home/Home";
import SignUp from "./views/signup/SignUp";
import Event from "./views/home/components/Event";

const App = () => {

    return (
        <AuthProvider>
            <div className="App">
                <BrowserRouter>
                    <NavScrollExample/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/event/:id" element={<Event/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </AuthProvider>
    );
}

export default App;