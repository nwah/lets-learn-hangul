import React from 'react';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';

const RoundComplete = ({nextRound, params}) => {
  let path = `/level/${params.level}`;
  path += nextRound ? `/round/${nextRound.round}` : `/complete`;

  return (
    <div className="round__complete">
      <p>Round Complete!</p>
      <Link to={path}>Continue</Link>
    </div>
  );
}

export default branch(RoundComplete, {
  cursors({params}) {
    let {level, round} = params;
    let key = `${level}.${parseFloat(round) + 1}`;
    return {
      nextRound: ['rounds', key],
    };
  }
});