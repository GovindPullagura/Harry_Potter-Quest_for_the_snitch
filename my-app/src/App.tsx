import React from "react";

import "./App.css";

import { Allroutes } from "./Pages/Allroutes";
import { UserLogin } from "./Components/UserLogin";
import { LeaderBoard } from "./Components/LeaderBoard";


function App() {
  return (
    <div>
<UserLogin/>
      <LeaderBoard/>
      {/* <Allroutes/> */}
    </div>
      
    
    
  );
}

export default App;
