import React from "react";
import './intro.css';

function Intro() {
    return(
        <div className="container">
            <header className="header">
                <h1
                  id="title"
                  className="text-center">Generation USA Education Survey Form</h1>
                <p
                  id="description"
                  className="description text-center">Thank you for taking the time to complete this form</p>
            </header>
        </div>
    );
}

export default Intro;