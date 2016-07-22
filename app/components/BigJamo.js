import React from 'react';
import { getShapeID } from '../utils/display';

const BigJamo = ({shapes, jamo, className}) => (
  <svg viewBox="0 0 600 600" className={className || "big-jamo"}>
    <path d={shapes[getShapeID(jamo)] || ''} />
  </svg>
);

export default BigJamo;