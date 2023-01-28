import React from "react";
import ChildrenComp from "./ChildrenComp";

const ParentComp = () => {
  const clickHandler = (child) => {
    alert(`Hello from ${child}`);
  };
  return (
    <div>
      <ChildrenComp propFunc={clickHandler} />
    </div>
  );
};

export default ParentComp;
