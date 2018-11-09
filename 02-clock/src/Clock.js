import React, { Component } from "react";
import ClockHourHand from "./ClockHourHand";
import ClockMinuteHand from "./ClockMinuteHand";
import ClockSecondHand from "./ClockSecondHand";

class Clock extends Component {
  constructor() {
    super();

    this.state = {
      hours: "",
      minutes: "",
      seconds: ""
    };
  }

  componentDidMount() {
    setInterval(this.setDate, 1000);
  }

  setHours(time) {
    const hour = time.getHours();
    const mins = time.getMinutes();
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
    return hourDegrees;
  }

  setMinutes(time) {
    const seconds = time.getSeconds();
    const mins = time.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    return minsDegrees;
  }

  setSeconds(time) {
    const seconds = time.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    return secondsDegrees;
  }

  setDate = () => {
    const now = new Date();
    const seconds = this.setSeconds(now);
    const minutes = this.setMinutes(now);
    const hours = this.setHours(now);

    this.setState({ seconds, minutes, hours });
  };

  render() {
    return (
      <div className="clock">
        <div className="clock-face">
          <ClockHourHand hours={this.state.hours} />
          <ClockMinuteHand minutes={this.state.minutes} />
          <ClockSecondHand seconds={this.state.seconds} />
        </div>
      </div>
    );
  }
}

export default Clock;
