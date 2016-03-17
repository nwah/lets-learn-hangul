import React from 'react';
import { map } from 'lodash';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import { hideIndex } from '../actions/navigation';

const CourseIndex = ({levels, rounds, actions}) => {
  return (
    <div className="course-index">
      <button className="course-index__close" onClick={actions.hideIndex}>
        &times; close
      </button>
      <LevelsList levels={levels} rounds={rounds} />
    </div>
  );
}

const LevelsList = ({levels, rounds}) => (
  <ul>
    {map(levels, lvl => (
      <li key={lvl.level}>
        <Link to={`/level/${lvl.level}`}>
          Level {lvl.level}:
          {lvl.name}
        </Link>

        <RoundsList level={lvl} rounds={rounds} />
      </li>
    ))}
  </ul>
);

const RoundsList = ({level, rounds}) => (
  <ul>
    {map(level.rounds, round => (
      <li key={round}>
        <Link to={`/level/${level.level}/round/${rounds[round].round}`}>
          Round {rounds[round].round}:
          {rounds[round].name}
        </Link>
      </li>
    ))}
  </ul>
);

export default branch(CourseIndex, {
  cursors: {
    levels: ['levels'],
    rounds: ['rounds']
  },
  actions: { hideIndex }
});