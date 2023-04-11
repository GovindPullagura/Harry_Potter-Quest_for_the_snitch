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
  Heading,
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
    <div className="text-center fixed flex items-center right-[20px] h-[500px] rounded-[10px] ">
      <TableContainer className="w-80  max-w-3xl" border={"1px solid white"}>
        <Heading textDecoration={"underline"} as={"h2"} color={"white"}>
          Leaderboard
        </Heading>
        <Table variant="striped" colorScheme="orange.600">
          <Thead>
            <Tr>
              <Th fontSize={"xl"} color={"white"}>
                Name
              </Th>
              <Th fontSize={"xl"} color={"white"}>
                Best Score
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user: userType, i: number) => (
              <Tr>
                <Td fontSize={"lg"} fontWeight={"bold"} color={"white"}>
                  {user.username}
                </Td>
                <Td fontSize={"lg"} fontWeight={"bold"} color={"white"}>
                  {user.bestScore}
                </Td>
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
