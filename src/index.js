// Create a React app from scratch.
// Show a single h1 that says "Good morning" if between midnight and 12PM.
// or "Good Afternoon" if between 12PM and 6PM.
// or "Good evening" if between 6PM and midnight.
// Apply the "heading" style in the styles.css
// Dynamically change the color of the h1 using inline css styles.
// Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const hour = new Date().getHours();
let greeting = "";
const customStyle = {};

if (hour < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
  customStyle.borderColor = "red";
}
else if (hour < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
  customStyle.borderColor = "green";
}
else {
  greeting = "Good evening";
  customStyle.color = "blue";
  customStyle.borderColor = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>{greeting}</h1>
  </div>,
  document.getElementById("root")
);
