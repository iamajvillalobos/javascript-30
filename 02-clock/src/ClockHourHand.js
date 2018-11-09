import React from "react";

const ClockHourHand = ({ hours }) => {
  return (
    <div
      className="hand hour-hand"
      style={{ transform: `rotate(${hours}deg)` }}
    />
  );
};

export default ClockHourHand;
