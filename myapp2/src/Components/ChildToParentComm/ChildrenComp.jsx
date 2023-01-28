import React from "react";

const ChildrenComp = ({ propFunc }) => {
  return (
    <div>
      <button onClick={() => propFunc("Child1")}>
        Click me to pass data from child to parent
      </button>
    </div>
  );
};

export default ChildrenComp;
