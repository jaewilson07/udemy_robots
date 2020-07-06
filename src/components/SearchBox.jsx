import React from 'react';

const SearchBox = ({ search_txt }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={search_txt}
      />
    </div>
  );
};

export default SearchBox;
