import React from "react";

const ClockSecondHand = ({ seconds }) => {
  return (
    <div
      className="hand second-hand"
      style={{ transform: `rotate(${seconds}deg)` }}
    />
  );
};

export default ClockSecondHand;
