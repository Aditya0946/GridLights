// import React from "react";

const Cell = ({ filled, onClick, isDisabled }) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    ></button>
  );
};

export default Cell;
