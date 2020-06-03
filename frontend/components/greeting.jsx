import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => (
    <div>
        {currentUser ? (
            <div>
                <h1>Welcome, {currentUser.username}</h1>
                <button onClick={logout}>Logout</button>
            </div>
        ) : (
                <div>
                   
                </div>
            )}
    </div>
);

export default Greeting;
