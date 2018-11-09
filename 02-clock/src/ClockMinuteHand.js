import React from "react";

const ClockMinuteHand = ({ minutes }) => {
  return (
    <div
      className="hand min-hand"
      style={{ transform: `rotate(${minutes}deg)` }}
    />
  );
};

export default ClockMinuteHand;
