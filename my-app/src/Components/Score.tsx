import React, { Dispatch, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  IconButton,
  Text,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { userType } from "../Constants/types";
import {
  addNewUser,
  getUsersData,
  loginUser,
  upadteuserScore,
} from "../Redux/userReducer/action";
import axios from "axios";
type ScoreInput = {
  score: number;
};

export const Score = ({ score }: ScoreInput) => {
  const CurrentPlayer = localStorage.getItem("player") || "";
  console.log(CurrentPlayer);

  const player = useSelector((store: any) => store.player);

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(loginUser(CurrentPlayer));
  }, [score]);

  return (
    <Card
      maxW="md"
      style={{
        position: "fixed",
        left: "50px",
        // backgroundColor: "#B2F5EA",
        background: "rgba(0, 0, 0, 0)",
        width: "20%",
      }}
    >
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            {/* <div  style={{width:"25px"}}>{player.username[0]}</div> */}

            <Box>
              <Heading color={"white"} size="lg">
                Hello, {player.username}
              </Heading>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text color={"white"} fontSize={"20px"}>
          Your Best Score : {player.bestScore}
        </Text>

        <Text color={"white"} fontSize={"20px"}>
          Current Score : {score}
        </Text>
      </CardBody>

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        {/* <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
      Comment
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
      Share
    </Button> */}
      </CardFooter>
    </Card>
  );
};
