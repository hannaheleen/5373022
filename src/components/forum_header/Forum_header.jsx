import React from "react";

const Forum_header = () => {
  const ctaClicked = () => {
    console.log("ctaClicked");
  };
  return (
    <div>
      <button
        onClick={() => {
          console.log("Play Button clicked");
        }}
      >
        Play
      </button>
      <h1>Headline Header</h1>
      <button onClick={ctaClicked}>Join Today</button>
    </div>
  );
};

export default Forum_header;
