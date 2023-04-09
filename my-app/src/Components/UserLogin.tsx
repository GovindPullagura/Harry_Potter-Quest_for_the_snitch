import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  Heading,
} from "@chakra-ui/react";
import { Dispatch, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewUser, loginUser } from "../Redux/userReducer/action";
// import {useNavigate} from "react-router-dom"

export function UserLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [userName,setUserName]= useState<string>("")
  const [pos,setPos] =useState<number> (25)

const dispatch :Dispatch<any> =useDispatch()

// const navigate = useNavigate()
  const {
    isOpen: newuserisOpen,
    onOpen: newuserOpen,
    onClose: newuserClose,
  } = useDisclosure();

  const handleSubmit=()=>{
console.log(userName)
dispatch(addNewUser(userName))
  // navigate("/leaderboard")

  }

  const handleLogin=()=>{
    console.log(userName)
    dispatch(loginUser(userName))
      // navigate("/leaderboard")
    
      }

      useEffect(()=>{

        let intVal :any;
        {
          if(pos==25){
      intVal = setInterval(() => {
        setPos(35)
      }, 1000);
    }else{
      intVal = setInterval(() => {
        setPos(25)
      }, 1000);
    }
    }
    return () => clearInterval(intVal);
       
       
      })
  return (
    <div  className="w-full flex justify-center h-screen bg-fixed bg-cover bg-no-repeat bg-[url('https://th.bing.com/th/id/R.c0b00a71e706a67212c17e6ab79e2b40?rik=yapT9IUqphvbFA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f01%2fHarry-Potter-Desktop-Backgrounds-of-Video-Game.jpg&ehk=Ie8MAGh3SXXBXr1t3aBicICoRW7QI9SZscD%2blf%2fndMU%3d&risl=&pid=ImgRaw&r=0')]">
      {/* <Heading size={"4xl"} color={'yellow'} className='text-center '>Harry potter
      <br></br> The Dementor's Curse</Heading> */}
      {/* <audio controls autoPlay>
        <source src="audio.mp3" type="audio/mpeg"></source>
        
      </audio> */}
      <div>

      <div  style={{height:"40%"}} className=" border-y border-red-500" >
      <img src="https://i.postimg.cc/yNYqM3L3/harry-1-removebg-preview.png" style={{marginTop:`${pos}%`,transition:"0.5s" }}/>
      
      </div>
      <div className="bg-red-500 p-10">
      <div  className="flex justify-center items-center" >
      <Button
       
        style={{ display: "flex", justifyContent: "center" }}
        onClick={onOpen}

      >
        New user
      </Button>

      </div>
      <div  className="flex justify-center items-center m-4" >
      <Button
       
        style={{ display: "flex", justifyContent: "center" }}
        onClick={newuserOpen}

      >
        Exsisting user
      </Button>
      </div>
      </div>

             {/* <Button onClick={newuserOpen}  bgColor={"red"}>Exsisting user</Button> */}
     
      </div>

      
      

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent transition="all 0.2s" bgColor="rgb(250 204 21)">
          <ModalHeader color={'red'} className="flex justify-center">Enter Unique Name</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={10}>
            {/* <Lorem count={2} /> */}

            <Input placeholder="Name" value={userName}onChange={(e)=>setUserName(e.target.value)} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} width={"100%"} onClick={()=>{
              handleLogin()
              onClose()
            }}>
              Enter
            </Button>
     
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* second modal for new user */}
     

      <Modal isOpen={newuserisOpen} onClose={newuserClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}

            <Input placeholder="name" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={()=>{
            handleSubmit()
            newuserClose()
          }}
            >
              Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
