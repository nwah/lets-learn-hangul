import React from 'react';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import JamoTable from './JamoTable';
import Circle from './Circle';

const RoundComplete = ({nextRound, params}) => {
  let path = `/level/${params.level}`;
  path += nextRound ? `/round/${nextRound.round}` : `/complete`;

  return (
    <div className="round__complete">
      <div className="round__complete__top">
        <Circle />
        <label>Round Complete!</label>
        <p>You’ve learned 4 new Hangul letters!</p>
      </div>

      <Link to={path} className="button button--forward button--green" autoFocus>
        Continue
      </Link>

      <JamoTable />
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