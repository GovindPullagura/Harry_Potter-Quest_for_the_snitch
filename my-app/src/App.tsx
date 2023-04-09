import React from "react";

import "./App.css";

import { Allroutes } from "./Pages/Allroutes";
import { UserLogin } from "./Components/UserLogin";
import { LeaderBoard } from "./Components/LeaderBoard";
import Game from "./Components/Game";

function App() {
  return (
    <div className="flex justify-center align-middle ">
      {/* <h1 className="text-3xl font-bold underline text-orange-600">
        Hello world!
      </h1> */}
      {/* <Game/> */}
      {/* <UserLogin/> */}
      <Allroutes />
      {/* <LeaderBoard/> */}
    </div>
  );
}

export default App;
