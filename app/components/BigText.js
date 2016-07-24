import React from 'react';
import { getShapeID } from '../utils/display';

const BigText = ({text, className}) => (
  <svg viewBox="0 0 400 600" className={className || "big-text"}>
    <text x="200" y="300" dy="175" fill="#2d2b29" textAnchor="middle" fontSize="450pt" fontWeight="600" fontFamily="ff-enzo-web">
      {text}
    </text>
  </svg>
);

export default BigText;