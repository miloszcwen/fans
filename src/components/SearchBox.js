import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="tc pa2 bg-navy">
      <input
        className="tc navy pa1 mt2"
        type="search"
        placeholder="filter fans"
        value={searchField}
        onChange={searchChange}
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBox;
