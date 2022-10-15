import React from "react";
import DateTimeDisplay from "./datetime";
import { useCountdown } from "./countdown";
import "./homePage.css";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>The contest has already ended.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a target="_blank" rel="noopener noreferrer" className="countdown-link">
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 1} />
        <p className="seperator">{"//"}</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p className="seperator">{"//"}</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p className="seperator">{"//"}</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
