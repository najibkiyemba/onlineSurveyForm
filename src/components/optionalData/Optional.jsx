import React from "react";
import './optional.css';

const Optional = () => {
    return (
        <div id="container">
            <div className="form-group">
                <p>What would you like see improved? <span className="clue">(Check all that apply)</span></p>
                    <label>
                        <input
                          className="input-checkbox"
                          value="front-end-projects"
                          name="prefer"
                          type="checkbox"/> Front-end Technologies
                    </label><br/>
                    <label>
                        <input
                          name="prefer"
                          value="back-end-projects"
                          className="input-checkbox"
                          type="checkbox"/> Back-end Technologies
                    </label><br/>
                    <label>
                        <input
                          name="prefer"
                          value="data-visualization"
                          className="input-checkbox"
                          type="checkbox"/> Coding Challenges
                    </label><br/>
                    <label>
                        <input
                          value="challenges"
                          className="input-checkbox"
                          name="prefer"
                          type="checkbox"/> Instructors
                    </label><br/>
                    <label>
                        <input
                          className="input-checkbox"
                          name="prefer"
                          value="open-source-communit"
                          type="checkbox"/> Open Source Community
                    </label><br/>
                    <label>
                        <input
                          className="input-checkbox"
                          name="prefer"
                          value="gitter-help-rooms"
                          type="checkbox"/> Canvas
                    </label><br/>
                    <label>
                        <input
                          className="input-checkbox"
                          name="prefer"
                          value="Videos"
                          type="checkbox"/> Virtual Meetings
                    </label><br/>
                    <label>
                        <input
                          className="input-checkbox"
                          name="prefer"
                          value="city-meetups"
                          type="checkbox"/> Discussion Forum
                    </label><br/>
                    <label>
                        <input
                          className="input-checkbox"
                          name="prefer"
                          value="wiki"
                          type="checkbox"/> Projects
                    </label><br/>
                    <label>
                        <input
                          className="input-checkbox"
                          name="prefer"
                          value="forum"
                          type="checkbox"/> Group Assignments
                    </label><br/>
                    <label>
                        <input
                          className="input-checkbox"
                          value="additional-courses"
                          name="prefer"
                          type="checkbox"/> Additional Courses
                    </label><br/>
                    <label>
                        <input
                          className="input-checkbox"
                          value="others"
                          name="prefer"
                          type="checkbox"/> Others
                    </label>
            </div>
            <div className="form-group">
                <p>Any comments or suggestions?</p>
                <textarea
                  required
                  name="comment"
                  id="comments"
                  className="input-textarea"
                  placeholder="Enter your comment here....."
                ></textarea>
            </div>
            <div className="form-group">
                <button
                  type="submit"
                  id="submit"
                  className="submit-button"
                  >Submit</button>
            </div>
        </div>
    );
};



export default Optional;