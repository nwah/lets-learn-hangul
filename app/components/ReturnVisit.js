import React from 'react';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import LandingBrushTitle from './LandingBrushTitle';

const ReturnVisit = ({latest = '', levels = {}}) => {
  let next = `/level/1`;
  if (latest) {
    let [level, round] = latest.split('.').map(n => parseInt(n));
    if (levels[level] && ++round >= levels[level].rounds.length) {
      level++;
      round = 1;
    }
    next = levels[level] ? `/level/${level}/round/${round}` : '/learnedeverything';
  }

  return (
    <div className="return-visit">
      <div className="return-visit__inner">
        <h4>Welcome back!</h4>
        <p>Do you want to pick back up where you left off last time?</p>
        <Link to="/level/1" className="button button--link">
          No, start over from the beginning
        </Link>
        <Link to={next} className="button button--forward" data-autofocus="true">
          Yes, keep going!
        </Link>
      </div>
    </div>
  );
}

export default branch(ReturnVisit, {
  cursors: {
    latest: ['user', 'latest'],
    levels: ['levels'],
  },
});