import React from 'react';
import { getShapeID } from '../utils/display';

const BigText = ({text, className}) => (
  <svg viewBox="0 0 400 600" className={className || "big-text"}>
    <text x="200" y="300" dy="250" textAnchor="middle" fontSize="500pt" fontWeight="300" fontFamily="ff-enzo-web">
      {text}
    </text>
  </svg>
);

export default BigText;