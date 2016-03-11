import React from 'react';
import { Link } from 'react-router';
import LandingBrushTitle from './LandingBrushTitle';

const Landing = props => (
  <div className="landing">
    <div className="landing__circle" />
    <LandingBrushTitle className="landing__brush-title" />
    <Link to="/level/1">Start!</Link>
  </div>
);

export default Landing;