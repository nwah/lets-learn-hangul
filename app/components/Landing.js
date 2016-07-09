import React from 'react';
import { Link } from 'react-router';
import LandingBrushTitle from './LandingBrushTitle';

const Landing = props => (
  <div className="landing">
    <div className="landing__circle" />
    <LandingBrushTitle className="landing__brush-title" />

    <div className="landing__inner">
      <h1>Let’s Learn <b>Hangul!</b></h1>
      <p>Learn to read Hangul, the simple, beautiful Korean alphabet.</p>
      <p><i>It only takes about 30 min. Really.</i> </p>
    </div>

    <Link to="/level/1" className="button button--forward" autoFocus data-autofocus="true">
      Let’s go!
    </Link>
  </div>
);

export default Landing;