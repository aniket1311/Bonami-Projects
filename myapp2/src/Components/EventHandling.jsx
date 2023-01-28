import React from "react";

const EventHandling = () => {
  const clickHandler = () => {
    console.log("CLick works");
  };
  return (
    <>
      <button onClick={() => clickHandler()}>Click me to log</button>
    </>
  );
};

export default EventHandling;
