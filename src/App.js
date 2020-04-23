//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect} from "react";
import BottomRow from "./BottomRow";
import "./App.css";
import Timer from './Timer';


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [score1, lionsCount] = useState(0);
  const [score2, tigersCount] = useState(0);

  
    const [timeLeft1, minutes] = useState(15);
    const [timeLeft2, seconds1] = useState(0); 
    const [timeLeft3, seconds2] = useState(0);
  
  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{score1}</div>
          </div>
          {/*<div className="timer">{timeLeft1 + ":" + timeLeft2 + timeLeft3}</div>*/}
          <Timer />
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{score2}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() =>
            lionsCount(score1 + 7)
          }
          >Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() =>
            lionsCount(score1 + 3)}
            >Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() =>
            tigersCount(score2 + 7)
          }>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() =>
            tigersCount(score2 + 3)} 
            >Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
