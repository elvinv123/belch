import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => (
    <div>
        {currentUser ? (
            <div>
                {/* <h1>Welcome, {currentUser.fname}</h1> */}
            </div>
        ) : (
                <div>
                   
                </div>
            )}
    </div>
);

export default Greeting;
