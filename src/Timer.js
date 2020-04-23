import React, {useState, useEffect} from "react";
import "./App.css";

export const Timer = ({minutes = 15, seconds = 0}) => {

    //setting the timer states
    const [paused, setPaused] = useState(false)
    const [over, setOver]= useState(false)
    const [time, setTime] = useState({
        minutes: parseInt(minutes, 10),
        seconds: parseInt(seconds, 10)
    })


    const tick = () =>{
        // if timer is paused or zero(over) do nothing
        if(paused || over) return;

        //times up
        if(time.minutes === 0 && time.seconds === 0){
            setOver(true);
        }else if (time.seconds === 0){
            setTime({
                //decrementing minutes
                minutes: time.minutes - 1,
                seconds: 59
            });
        }else{
            //decrementing seconds
            setTime({
                minutes: time.minutes,
                seconds: time.seconds - 1
            });
        }

    };

    //Reset to original state
    const reset = () => {
        setTime({
            minutes: parseInt(minutes),
            seconds: parseInt(seconds)
        });
        setPaused(false);
        setOver(false);
    };

    useEffect(() =>{
        //setting intervals between ticks
        let timerID = setInterval(()=> tick(), 1000);

        //doing clean up in return of the function so we do not get a memory leak
        return() => clearInterval(timerID);
    });




    return (
        <div className="timer">{`${time.minutes.toString().padStart(2,'0')}:${time.seconds.toString().padStart(2,'0')}`}</div>
        
    );
}





export default Timer;