import * as React from "react";
import style from "./button-start.module.css";

const ButtonStart = ({ onClick, isGameStarted }) => {
  const getButtonClasses = () =>
    `${isGameStarted ? style["button-clicked"] : ""} ${style["button"]}`;

  return (
    <div id="button-start" className={getButtonClasses()} onClick={onClick}>
      Sortear as cartas
    </div>
  );
};

export default ButtonStart;
