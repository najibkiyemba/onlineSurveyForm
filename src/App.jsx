import React from "react";
import Intro from './components/introduction/Intro';
import UserData from './components/personalData/UserData';


const App = () => {
    return (
        <div>
            <Intro />
            <UserData />
        </div>
    );
};

export default App;