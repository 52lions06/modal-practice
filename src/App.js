import React from "react";
import Container from "./Containter";
import Filler from "./Filler";
import "./App.css";

// since there is no state to be responsible make this
// this component stateless

const App = () => {
  const TriggerText = "Open Form";

  const onSubmit = evt => {
    evt.preventDefault();
    console.log("Name value: ", evt.target.name.value);
    console.log("Email value: ", evt.target.email.value);
  };

  return (
    <div className="App">
      <Filler />
      <Container triggerText={TriggerText} onSubmit={onSubmit} />
      <Filler />
    </div>
  );
};
export default App;

// 1. Have general setup for the apps
// 2. render the text that will show up ( small stateless component)
// 3. Have general setup for container
// 4. setup modal
