import React from "react";
import DrumKey from "./DrumKey";
import clapSound from "./sounds/clap.wav";
import boomSound from "./sounds/boom.wav";
import hihatSound from "./sounds/hihat.wav";
import kickSound from "./sounds/kick.wav";
import openhatSound from "./sounds/openhat.wav";
import rideSound from "./sounds/ride.wav";
import snareSound from "./sounds/snare.wav";
import tinkSound from "./sounds/tink.wav";
import tomSound from "./sounds/tom.wav";

class DrumSet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyPressed: null
    };
  }

  handleKeyPress = event => {
    this.setState({ keyPressed: event.code });
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <div className="drumset">
        <DrumKey
          letter="a"
          sound="clap"
          keyPress={this.state.keyPressed}
          soundFile={clapSound}
        />
        <DrumKey
          letter="s"
          sound="hihat"
          keyPress={this.state.keyPressed}
          soundFile={hihatSound}
        />
        <DrumKey
          letter="d"
          sound="kick"
          keyPress={this.state.keyPressed}
          soundFile={kickSound}
        />
        <DrumKey
          letter="f"
          sound="openhat"
          keyPress={this.state.keyPressed}
          soundFile={openhatSound}
        />
        <DrumKey
          letter="g"
          sound="boom"
          keyPress={this.state.keyPressed}
          soundFile={boomSound}
        />
        <DrumKey
          letter="h"
          sound="ride"
          keyPress={this.state.keyPressed}
          soundFile={rideSound}
        />
        <DrumKey
          letter="j"
          sound="snare"
          keyPress={this.state.keyPressed}
          soundFile={snareSound}
        />
        <DrumKey
          letter="k"
          sound="tom"
          keyPress={this.state.keyPressed}
          soundFile={tomSound}
        />
        <DrumKey
          letter="l"
          sound="tink"
          keyPress={this.state.keyPressed}
          soundFile={tinkSound}
        />
      </div>
    );
  }
}

export default DrumSet;
