import React from 'react';
import { map, flatten, fromPairs, filter } from 'lodash';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import JamoTable from './JamoTable';
import Circle from './Circle';

const RoundComplete = ({level, round, rounds, nextRound, newJamos = [], params}) => {
  let path = `/level/${params.level}`;
  path += nextRound ? `/round/${nextRound.round}` : `/complete`;

  let current = parseFloat(`${level.level}.${round.round}`);
  let completed = filter(rounds, (round, key) => parseFloat(key) <= current);
  let known = fromPairs(flatten(map(completed, ({jamo}) => map(jamo, j => [j, true]))));

  return (
    <div className="round__complete">
      <div className="round__complete__top">
        <Circle />
        <label>Round {round.round} Complete!</label>
        <p>{'You’ve learned ' + (newJamos.length > 1 ? `${newJamos.length} new Hangul letters!` : 'a new Hangul letter!')}</p>
      </div>

      <Link to={path} className="button button--forward button--green" autoFocus data-autofocus="true">
        Continue
      </Link>

      <JamoTable newJamos={newJamos} known={known} />
    </div>
  );
}

export default branch(RoundComplete, {
  cursors({params}) {
    let {level, round} = params;
    let key = `${level}.${parseFloat(round)}`;
    let nextKey = `${level}.${parseFloat(round) + 1}`;
    return {
      rounds: ['rounds'],
      nextRound: ['rounds', nextKey],
      newJamos: ['rounds', key, 'jamo'],
    };
  }
});