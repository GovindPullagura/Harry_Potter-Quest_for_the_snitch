import React, { Dispatch, useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, IconButton,Text, Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { userType } from '../Constants/types'
import { addNewUser, getUsersData, loginUser, upadteuserScore } from '../Redux/userReducer/action'
import axios from 'axios'
type ScoreInput= {
score:number
}

export const Score = ({score }:ScoreInput) => {
    const CurrentPlayer =localStorage.getItem("player")||""
    console.log(CurrentPlayer)

    const player =useSelector((store:any)=>store.player)

    const dispatch: Dispatch<any> = useDispatch();
   
    useEffect(()=>{

        dispatch(loginUser(CurrentPlayer))
    },[score])








  return (
<Card maxW='md' style={{position:"fixed",left:"50px",backgroundColor:"#B2F5EA" ,width:"20%"}}>
  <CardHeader>
    <Flex >
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        {/* <div  style={{width:"25px"}}>{player.username[0]}</div> */}

        <Box>
          <Heading size='lg'>{player.username}</Heading>
       
        
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        // icon={<BsThreeDotsVertical />}
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text fontSize={"20px"}>
     Best Score : {player.bestScore}
    </Text>
   
    <Text fontSize={"20px"}>
     Current Score : {score}
    </Text>
  </CardBody>
  {/* <Image
    objectFit='cover'
    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    alt='Chakra UI'
  /> */}

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
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
  )
}
