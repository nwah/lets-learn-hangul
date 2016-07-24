import React from 'react';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import { startHistory } from '../actions/user';
import LandingBrushTitle from './LandingBrushTitle';

const Landing = ({latest, actions}) => (
  <div className="landing">
    <div className="landing__circle" />
    <LandingBrushTitle className="landing__brush-title" />

    <div className="landing__inner">
      <h1>Let’s Learn <b>Hangul!</b></h1>
      <p>Learn to read Hangul, the simple, beautiful Korean alphabet.</p>
      <p><i>It only takes about 30 min. Really.</i> </p>
    </div>

    <Link className="button button--forward"
      to={latest ? '/return' : '/level/1'}
      onMouseDown={actions.startHistory}
      data-autofocus="true">
      Let’s go!
    </Link>
  </div>
);

export default branch(Landing, {
  cursors: {
    latest: ['user', 'latest'],
  },
  actions: {
    startHistory,
  }
});