import React from "react";
import Optional from "../optionalData/Optional";
import './userData.css';


const UserData = () => {
    return (
        <div>
            <form id="userData">
                <div className="inputData">
                    <label
                    className="name">Name</label><br/>
                    <input
                    className="inputName"
                    required type="text"/><br/>
                    <label
                    className="email">Email</label><br/>
                    <input
                    input="inputEmail"
                    required type="email"/><br/>
                    <label
                    className="age">Age(optional)</label><br/>
                    <input 
                    className="inputAge"
                    required
                    type="number"/>
                </div>
                <div>
                    <p>Which option best describes your current role?</p>
                    <select>
                        <option>Select current role</option>
                        <option>Student</option>
                        <option>Full Time Job</option>
                        <option>Full Time Learner</option>
                        <option>Prefer not to say</option>
                        <option>Other</option>
                    </select>
                </div>
                <div>
                    <p>Would you recommend online teaching to a friend.</p>
                    <label>
                        <input name="user" type="radio"/> Definitely
                    </label><br/>
                    <label>
                        <input name="user" type="radio"/> Maybe
                    </label><br/>
                    <label>
                        <input name="user" type="radio"/> Not sure
                    </label>
                </div>
            </form>
        </div>
    );
};

export default UserData;