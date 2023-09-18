import React, { useEffect } from "react";

const ScrollUpButton = () => {
  const scrollUp = () => {
    window.scroll(0, 0);
  };

  return (
    <span className="scrollBtn"
      onClick={scrollUp}
      style={{
        position: "fixed",
        bottom: 50,
        right: 30,
        cursor: "pointer",
        transitionDuration: "0.2s",
        transitionTimingFunction: "linear",
        transitionDelay: "0s",
      }}
    >
      <i className="fa-solid fa-chevron-up"></i>
    </span>
  );
};

export default ScrollUpButton;
