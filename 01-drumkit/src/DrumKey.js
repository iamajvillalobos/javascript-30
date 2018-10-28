import React from "react";

class DrumKey extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.drumkeyRef = React.createRef();
  }

  handleProperKey() {
    const { letter, keyPress } = this.props;
    const code = `Key${letter.toUpperCase()}`;

    if (keyPress === code) {
      this.addTransition();
      document.addEventListener("transitionend", this.removeTransition);
      this.playAudio();
    }
  }

  addTransition = () => {
    const drumkeyDiv = this.drumkeyRef.current;
    drumkeyDiv.classList.add("pressed");
  };

  removeTransition = event => {
    if (event.propertyName !== "transform") return;

    const drumkeyDiv = this.drumkeyRef.current;
    drumkeyDiv.classList.remove("pressed");
  };

  playAudio = () => {
    const audio = this.audioRef.current;
    audio.currentTime = 0;
    audio.play();
  };

  componentDidUpdate() {
    this.handleProperKey();
  }

  render() {
    const { letter, sound, soundFile } = this.props;

    return (
      <div className="drumkey" ref={this.drumkeyRef}>
        <span className="letter">{letter}</span>
        <span className="sound">{sound}</span>
        <audio src={soundFile} ref={this.audioRef} />
      </div>
    );
  }
}

export default DrumKey;
