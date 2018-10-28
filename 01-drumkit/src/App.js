import React from "react";
import ReactDOM from "react-dom";
import DrumSet from "./DrumSet";

class App extends React.Component {
  render() {
    return <DrumSet />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
