// import React from 'react';

// const MyButton = () => {
//   return <button id='button' onClick={() => alert('Button clicked!')}>Click me</button>;
// };

// export default MyButton;

import React from "react";
import "../styles/MyButton.css"; // Import the CSS file

const MyButton = ({name}) => {
  return (
    <button className="button" onClick={() => alert("Button clicked!")}>
      {name}
    </button>
  );
};

export default MyButton;
