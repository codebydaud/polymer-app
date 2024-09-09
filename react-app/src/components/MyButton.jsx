import React from "react";

const MyButton = ({ name }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: "#06bb60", color: "white", border: "none" }}
      onClick={() => alert("Button clicked!")}
    >
      {name}
    </button>
  );
};

export default MyButton;


