import React from "react";

const Scroll = (props) => {
  return (
    <div style={{ overflowX: "none", overflowY: "none", height: "auto" }}>
      {props.children}
    </div>
  );
};

export default Scroll;
