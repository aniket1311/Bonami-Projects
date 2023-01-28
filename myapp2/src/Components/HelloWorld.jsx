import React from "react";

const HelloWorld = (props) => {
  return (
    <>
      Hello {props.name}
      {props.childrenw}
    </>
  );
};

export default HelloWorld;
