import React from "react";
import "./option.css";

const Option = props => (
  <li className="option">
    <p className="option-text">
      {props.value}
      <button onClick={() => props.onClick()} className="buttons">
        Remover
      </button>
    </p>
  </li>
);

export default Option;
