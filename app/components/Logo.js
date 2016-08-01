import React from 'react';
import { Link } from 'react-router';
import LandingBrushTitle from './LandingBrushTitle';
import Circle from './Circle';

const Logo = () => (
  <Link to="/" className="logo">
    <Circle r={109} className="logo__circle" />
    <LandingBrushTitle className="logo__korean" width="140" height="140" animate={false} />
    <div className="logo__english">
      Let’s<br />
      Learn<br />
      <b>Hangul!</b>
    </div>    
  </Link>
);

export default Logo;