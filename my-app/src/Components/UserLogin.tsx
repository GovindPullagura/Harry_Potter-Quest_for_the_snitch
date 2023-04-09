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
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, loginUser } from "../Redux/userReducer/action";
import { useNavigate } from "react-router-dom";
// import {useNavigate} from "react-router-dom"



export function UserLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [userName, setUserName] = useState<string>("");
  const [pos, setPos] = useState<number>(25);

  const dispatch: Dispatch<any> = useDispatch();

  const navigate = useNavigate();
  const {
    isOpen: newuserisOpen,
    onOpen: newuserOpen,
    onClose: newuserClose,
  } = useDisclosure();

  const player =useSelector((store:any)=>store.player)
// Existing user
  const handleLogin = () => {
    console.log(userName);
     // @ts-ignore
    dispatch(loginUser(userName)).then(()=>{
      if(player.username){
 navigate("/game")
      }
     
  })
  
  };


  // New user
  const handleSubmit = () => {
    console.log(userName);
    // @ts-ignore
    dispatch(addNewUser(userName)).then(()=>{

        navigate("/game")
    })
    
  };

 

  useEffect(() => {
    let intVal: any;
    {
      if (pos == 25) {
        intVal = setInterval(() => {
          setPos(35);
        }, 1000);
      } else {
        intVal = setInterval(() => {
          setPos(25);
        }, 1000);
      }
    }
    return () => clearInterval(intVal);
  });
  return (
    <div className="w-full flex justify-center h-screen bg-fixed bg-cover bg-no-repeat bg-[url('https://i.postimg.cc/LXQSrX9B/Untitled-design-3-1.png')]">
      {/* <Heading size={"4xl"} color={'yellow'} className='text-center '>Harry potter
      <br></br> The Dementor's Curse</Heading> */}
      {/* <audio controls autoPlay>
        <source src="audio.mp3" type="audio/mpeg"></source>
        
      </audio> */}
      <div>
        <div style={{ height: "40%" }} className=" border-y border-[#041529]">
          <img
            src="https://i.postimg.cc/yNYqM3L3/harry-1-removebg-preview.png"
            style={{ marginTop: `${pos}%`, transition: "0.5s" }}
          />
        </div>
        <div className="bg-[#2B3033] p-10 rounded">
          <div className="flex justify-center items-center">
            <Button
              style={{ display: "flex", justifyContent: "center",}}
              onClick={onOpen}
            >
              Existing user
            </Button>
          </div>
          <div className="flex justify-center items-center m-4">
            <Button
              style={{ display: "flex", justifyContent: "center", }}
              onClick={newuserOpen}
            >
              New user
            </Button>
          </div>
        </div>

        {/* <Button onClick={newuserOpen}  bgColor={"red"}>Exsisting user</Button> */}
      </div>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent transition="all 0.2s">
          <ModalHeader className="flex justify-center">
            Enter Your username
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={10}>
            {/* <Lorem count={2} /> */}

            <Input
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              width={"100%"}
              onClick={() => {
                handleLogin();
                onClose();
              }}
            >
              Enter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* second modal for new user */}

      <Modal isOpen={newuserisOpen} onClose={newuserClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Unique Name</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}

            <Input
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button
            width={"100%"}
              colorScheme="blue"
              mr={3}
              onClick={() => {
                handleSubmit();
                newuserClose();
              }}
            >
              Enter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
