import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserLogin } from "../Components/UserLogin";
import { LeaderBoard } from "../Components/LeaderBoard";
import Game from "../Components/Game";

export const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
};
