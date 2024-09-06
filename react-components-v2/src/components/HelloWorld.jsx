// import React from 'react';

// const HelloWorld = ({ name }) => {
//   return <div className='text-center text-red-200'>Hello, {name}!</div>;
// };

// export default HelloWorld;

import React from "react";
const HelloWorld = ({name}) => {
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#BFDBFE",
        color: "#1D4ED8",
        borderRadius: "0.25rem",
      }}
    >
      Hello, {name}!
    </div>
  );
};
export default HelloWorld;
