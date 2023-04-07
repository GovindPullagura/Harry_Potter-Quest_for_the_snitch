import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LeaderBoard } from "./Components/LeaderBoard";


function App() {
  return (
    <div className="flex justify-center align-middle ">
      <h1 className="text-3xl font-bold underline text-orange-600">
        Hello world!
      </h1>
      <LeaderBoard/>
    </div>
  );
}

export default App;
