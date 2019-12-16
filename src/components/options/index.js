import React from "react";
import Option from "../option/";
import "./options.css";

const Options = props => (
  <ol className="options">
    {props.list.map((item, index) => (
      <Option value={item} key={index} onClick={() => props.onClick(item)} />
    ))}
  </ol>
);
export default Options;
