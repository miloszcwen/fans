import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className="tc pa2 bg-navy">
        <input className="tc navy pa1"
        type='search'
        placeholder='search fans'
        onChange={searchChange}
         />

        </div>
    );
}

export default SearchBox;