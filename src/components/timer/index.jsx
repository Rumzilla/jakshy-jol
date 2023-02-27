import React from "react";
import { Redirect } from "react-router-dom";
import "./timer.css";

const CountDown = ({minutes = 20, seconds = 0,}) => {

  const [paused, setPaused] = React.useState(false);
  const [over, setOver] = React.useState(false);
  const [[m, s], setTime] = React.useState([minutes, seconds]);

  const tick = () => {
    if (paused || over) return;

    if (m === 0 && s === 0) {
      setOver(true);
    } else if (m === 0 && s === 0) {
      setTime([59, 59]);
    } else if (s === 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  };

  const finishTime = () => {
    const min = (minutes - 1) - m
    const sec = 60 - s
    return (
      `${min}:${sec}`
    )
  };

//   const reset = () => {
//     setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
//     setPaused(false);
//     setOver(false);
//   };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  },);



  return (
    <div className="timer-block">
      <div className="container">
        <div className="timer-block-wrap">
          <p className="timer-block-time">
          {`
            ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}
            `}
            </p>
            <div className="timer-block-over">{over ? <Redirect to="/result" /> : ''}</div>
          </div>
      </div>
    </div>
  );
};

export default CountDown;