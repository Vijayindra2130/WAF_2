"use client";

import { createContext, useContext, useState } from "react";

const UserContext = createContext("");

function Navbar() {
  const name = useContext(UserContext);

  return <h2>Welcome, {name}!</h2>;
}

export default function ShareState() {
    return (
        <UserContext.Provider value="students">     
            <Navbar />  
        </UserContext.Provider>
    );
}