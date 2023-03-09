import React from "react";

export const Button = ({ text, styles }) => {
  return <button className={`basic__button ${styles}`}>{text}</button>;
};
