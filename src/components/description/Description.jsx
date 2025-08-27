import React from "react";

const Description = ({ text }) => {
  return (
    <div>
      <div className="description  layout">
        <p className="paragraph">Description</p>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Description;
