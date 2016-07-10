import React from 'react';
import { map } from 'lodash';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import { hideIndex } from '../actions/navigation';

const CourseIndex = ({levels, rounds, actions, indexShowing}) => {
  if (!indexShowing) return <noscript />;

  return (
    <div className="course-index">
      <button className="course-index__close" onClick={actions.hideIndex}>
        &times;
      </button>
      <LevelsList levels={levels} rounds={rounds} actions={actions} />
    </div>
  );
}

const LevelsList = ({levels, rounds, actions}) => (
  <div className="course-index__levels">
    {map(levels, lvl => (
      <div className="course-index__level" key={lvl.level}>
        <Link className="level-name" to={`/level/${lvl.level}`} onClick={actions.hideIndex}>
          <div className="bubble">{lvl.level}</div>
          <span className="name">{lvl.name}</span>
        </Link>

        <RoundsList level={lvl} rounds={rounds} actions={actions} />
      </div>
    ))}
  </div>
);

const RoundsList = ({level, rounds, actions}) => (
  <div className="course-index__rounds">
    {map(level.rounds, round => (
      <div className="course-index__round" key={round}>
        <Link className="round-name" to={`/level/${level.level}/round/${rounds[round].round}`} onClick={actions.hideIndex}>
          <div className="bubble bubble--blue">{rounds[round].round}</div>
          <span className="name">{rounds[round].name}</span>
          <span className="jamos">
            {(rounds[round].jamo || []).map(j => j === '-' ? 'ㅇ' : j).join(' ')}
          </span>
        </Link>
      </div>
    ))}
  </div>
);

export default branch(CourseIndex, {
  cursors: {
    levels: ['levels'],
    rounds: ['rounds'],
    indexShowing: ['indexShowing'],
  },
  actions: { hideIndex },
});