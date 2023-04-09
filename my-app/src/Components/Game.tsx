import { useEffect, useState } from "react";
const BIRD_HEIGHT = 60;
const BIRD_WIDTH = 85;
const WALL_HEIGHT = 600;
const WALL_WIDTH = 600;

const OBJ_WIDTH = 53;

const OBJ_GAP = 200;
function Game() {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [birdpos, setBirspos] = useState<number>(300);
  const [objHeight, setObjHeight] = useState<number>(0);
  const [objPos, setObjPos] = useState<number>(WALL_WIDTH);
  const [score, setScore] = useState<number>(0);
  const [ObjSpeed, setObjSpeed] = useState<number>(8);
  const [gravity, setGravity] = useState<number>(12);
  const [show, setShow] = useState(false)
  const BelowObstacleHeihgt:number = WALL_HEIGHT - OBJ_GAP - objHeight;
  const BelowObstacleTop :number =
    WALL_HEIGHT - (objHeight + (WALL_HEIGHT - OBJ_GAP - objHeight));

  useEffect(() => {
    let intVal: any;
    if (isStart && birdpos < WALL_HEIGHT - BIRD_HEIGHT) {
      intVal = setInterval(() => {
        setBirspos((birdpos) => birdpos + gravity);
      }, 24);
    }
    return () => clearInterval(intVal);
  });

  useEffect(() => {
    let objval: any;
    if (isStart && objPos >= -OBJ_WIDTH) {
      objval = setInterval(() => {
        setObjPos((objPos) => objPos - ObjSpeed);
      }, 40);

      return () => {
        clearInterval(objval);
      };
    } else {
      setObjPos(WALL_WIDTH);
      setObjHeight(Math.floor(Math.random() * (WALL_HEIGHT - OBJ_GAP)));
      if (isStart) {
        setScore((score) => score + 1);
        if (score > 0 && score % 8 === 0) {
          setObjSpeed((prev) => prev + 5);
          setGravity((grav) => grav + 0.7);
        }
      }
    }
  }, [isStart, objPos, score]);

  useEffect(() => {
    let topObj = birdpos >= 0 && birdpos < objHeight;
    let bottomObj =
      birdpos <= WALL_HEIGHT &&
      birdpos >=
        WALL_HEIGHT - (WALL_HEIGHT - OBJ_GAP - objHeight) - BIRD_HEIGHT;

    if (
      objPos >= OBJ_WIDTH &&
      objPos <= OBJ_WIDTH + 80 &&
      (topObj || bottomObj)
    ) {
      setIsStart(false);
      setBirspos(300);
      setScore(0);
      setShow(false)
    }
  }, [isStart, birdpos, objHeight, objPos]);

  const handler = () => {
    if (!isStart) {
      setIsStart(true)
      setShow(true)
    } 
    else if (birdpos < BIRD_HEIGHT) {
      setBirspos(0);
      setGravity(12);
      setObjSpeed(10);
      setShow(false)
    } else setBirspos((birdpos) => birdpos - 90);
  };
  return (
    <div
      onClick={handler}
      className="h-screen  flex justify-center items-center m-auto  "
    >
      <span>Score: {score}</span>
      <div className={`bg-[url('https://i.postimg.cc/63wZZwkM/Quidditchpitch-1.webp')] bg-no-repeat  bg-[length:600px_800px]  w-[${WALL_WIDTH}px] h-[${WALL_HEIGHT}px]  relative overflow-hidden  `}>
        {!isStart ? (
          <div className="relative rounded-full top-[49%]  bg-red-600 p-[10px] w-[150px] ml-[-50px] text-center text-[20px] text-white font-semibold left-1/2">
            Play
          </div>
        ) : null}
         {show &&  <div  
          style={{
            position: "relative",
            backgroundImage: `url("https://i.postimg.cc/85Y1qHtv/pipe-removebg-preview.png")`,
            width: `${OBJ_WIDTH}px`,
            height: `${objHeight}px`,
            left: `${objPos}px`,
            top: "0px",
          
            transform: `rotate(180deg)`,
          }}
        ></div> }  
        <div
          style={{
            position: "absolute",
            backgroundImage: `url("https://i.postimg.cc/fLyyxFr4/harry-potter-quidditch-clipart-free-clipart-645248-png-removebg-preview.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${BIRD_WIDTH}px ${BIRD_HEIGHT}px`,
            width: `${BIRD_WIDTH}px`,
            height: `${BIRD_HEIGHT}px`,
            top: `${birdpos}px`,
            left: "100px",
          }}
        />
        {show && <div
          style={{
            position: "relative",
            backgroundImage: `url("https://i.postimg.cc/85Y1qHtv/pipe-removebg-preview.png")`,
             
            width: `${OBJ_WIDTH}px`,
            height: `${BelowObstacleHeihgt}px`,
            left: `${objPos}px`,
            top: `${BelowObstacleTop}px`,
             transform: `rotate(0deg)`,
           
          }}
        />}
      </div>
    </div>
  );
}

export default Game;