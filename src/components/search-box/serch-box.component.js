import React from "react";
import "./search-box.style.css";

const searchBox = (props) => (
  <input
    className={props.className}
    type="search"
    placeholder={props.placeholder}
    onChange={props.onChangeHandler}
  />
);

export default searchBox;
