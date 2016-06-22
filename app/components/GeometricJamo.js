import React from 'react';
import { mapping } from '../utils/display';
import { isMedial } from '../utils/hangul';

const red = '#ee1a60';
const blue = '#367add';

const GeometricJamo = ({geometric, jamo, className}) => (
  <svg viewBox="0 0 600 600" className={className || "geometric-jamo"}>
    <path
      d={geometric[mapping[jamo]] || ''}
      fill={isMedial(jamo) ? blue : red} />
  </svg>
);

export default GeometricJamo;