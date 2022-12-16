import React from "react";
import Optional from "../optionalData/Optional";
import './userData.css';


const UserData = () => {
    return (
        <div className="container">
            <form id="survey-form">
                <form>
                <div className="form-group">
                    <label
                      id="name-label"
                      for="name">Name</label><br/>
                    <input
                      placeholder="Enter your name"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                      type="text"/><br/>
                </div>
                <div className="form-group">
                    <label
                      id="email-label"
                      for="email">Email</label><br/>
                    <input
                      placeholder="Enter your email"
                      name="email"
                      className="form-control"
                      required
                      type="email"/><br/>
                </div>
                <div className="form-group">
                    <label
                      for="number">Age(optional)</label><br/>
                    <input
                      placeholder="Age"
                      className="form-control"
                      max="99"
                      min="10"
                      id="number"
                      name="age"
                      required
                      type="number"/>
                </div>
                
                <div className="form-group">
                    <p>Which option best describes your current role?</p>
                    <select
                      required
                      className="form-control"
                      id="dropdown"
                      name="role"
                      >
                        <option disabled selected value>Select current role</option>
                        <option value="student">Student</option>
                        <option value="job">Full Time Job</option>
                        <option value="learner">Full Time Learner</option>
                        <option value="preferNo">Prefer not to say</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <p>Would you recommend this program to a friend?</p>
                    <label>
                        <input className="input-radio" value="definitely" name="user" type="radio"/> Definitely
                    </label><br/>
                    <label>
                        <input className="input-radio" value="maybe" name="user" type="radio"/> Maybe
                    </label><br/>
                    <label>
                        <input className="input-radio" value="not-sure" name="user" type="radio"/> Not sure
                    </label>
                </div>
                <div className="form-group">
                    <p>What did you like most during this free program?</p>
                    <select className="form-control" id="most-like" name="mostLike" required>
                        <option value selected disabled>Select an option</option>
                        <option value="github">Github</option>
                        <option value="git">Git</option>
                        <option value="html">Html</option>
                        <option value="css">Css</option>
                        <option value="javascript">Javascript</option>
                        <option value="instructors">Instructors</option>
                        <option value="bootstrap">Bootstrap</option>
                        <option value="codecademy">Codecademy</option>
                        <option value="colleagues">Colleagues</option>
                        <option>slack(platform)</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <Optional/>
                </form>
            </form>
        
        </div>
    );
};

export default UserData;