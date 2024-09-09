import React from "react";

const HelloWorld = ({ name }) => {
  return (
    <div
      className="p-3 text-white rounded bg-info text-center"
    >
      Hello, {name}!
    </div>
  );
};

export default HelloWorld;


