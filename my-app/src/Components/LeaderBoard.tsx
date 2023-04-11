import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getLeadersData, getUsersData } from "../Redux/userReducer/action";
import axios from "axios";
import { userType } from "../Constants/types";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export const LeaderBoard = () => {
  const users = useSelector((store: any) => store.leaderBoard);

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getLeadersData);
  }, []);

  return (
    <div className="text-center fixed flex items-center right-[20px]  h-[500px] rounded-[10px] ">
      <TableContainer className="w-96  max-w-3xl">
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Best Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user: userType, i: number) => (
              <Tr>
                <Td className="text-[#aaadb0]">{user.username}</Td>
                <Td className="text-[#aaadb0]">{user.bestScore}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

//className="w-90% m-auto text-center border-collapse border border-slate-400 ..."
//className="w-80% border border-black ..."
