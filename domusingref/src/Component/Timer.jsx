import { useEffect, useRef,useState } from "react"

export default function Timer() {
const[timer,setTimer]=useState(0)
let timerId=useRef(null)
let h2Ref=useRef(null)
let startButton=useRef(null)
let stopButton=useRef(null)

useEffect(()=>{
  if(timer===0){
    h2Ref.current.innerText =`Value is ${timer}`;
    h2Ref.current.style.color="black"
  }else{
    h2Ref.current.innerText=`Timer Started at:- ${timer}`;
    h2Ref.current.style.color="green"
  }
});

const startTimer=()=>{
    
    startButton.current.disabled=true
    timerId.current=setInterval(()=>{
        setTimer((prevTimer)=>prevTimer+1)
    },1000);
};

const stopTimer=()=>{
    startButton.current.disabled=false;
    
    h2Ref.current.style.color="red"
    clearInterval(timerId.current);

}



  return (
    <div>
        <h2 id="timerId" ref={h2Ref}>Timer is {timer}</h2>
        <button onClick={startTimer} ref={startButton}>Start</button>
        <button onClick={stopTimer}>Stop</button>
    </div>
  )
}
