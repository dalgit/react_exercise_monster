import React from "react";
import "./SearchBox.scss";

function SearchBox({handleChange}) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search..."
      onChange={(e)=>handleChange(e)}
    />
  );
}

export default SearchBox;
