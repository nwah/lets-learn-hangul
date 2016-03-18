import React from 'react';

const Circle = ({r, fill, className}) => (
  <svg version="1.1" viewBox="0 0 400 400"
    width={r || "400px"}
    height={r || "400px"}
    className={`circle ${className || ''}`}
  >
    <circle cx="200" cy="200" r="200" fill={fill || "white"} />
  </svg>
);

export default Circle;