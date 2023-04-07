import axios from "axios";
import React, { useEffect, useState } from "react";

type userSchema = { _id: string; username: string; bestScore: number };

const Leaderboard = () => {
  const [userData, setUserData] = useState<userSchema[]>([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/leaderboard`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="text-center">
      <h1>Leaderboard</h1>
      <table className="w-50% m-auto text-center border-collapse border border-slate-400 ...">
        <thead>
          <tr>
            <th className="w-80% border border-black ...">User</th>
            <th className="w-20% border border-black ...">Score</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user: userSchema) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.bestScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
