import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid black',
        height: '_500px',
      }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;
