import React from 'react';
import { mapping } from '../utils/display';
import { isMedial } from '../utils/hangul';

const red = '#ee1a60';
const blue = '#367add';

const GeometricJamo = ({geometric, jamo, className, style, fill = true, size = 600}) => (
  <svg viewBox="0 0 600 600"
    width={size}
    height={size}
    className={className || "geometric-jamo"}
    style={style || {}}>
    <path
      d={geometric[mapping[jamo]] || ''}
      vectorEffect="non-scaling-stroke"
      fill={fill ? (isMedial(jamo) ? blue : red) : 'transparent'}
      stroke={!fill ? (isMedial(jamo) ? blue : red) : false} />
  </svg>
);

export default GeometricJamo;