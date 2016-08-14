import React from 'react';
import { map } from 'lodash';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import classNames from 'classnames';
import { hideIndex } from '../actions/navigation';

const CourseIndex = ({levels, rounds, actions, indexShowing, latest}) => {
  if (!indexShowing) return <noscript />;
  latest = parseFloat(latest) || 1.1;
  return (
    <div className="course-index">
      <button className="course-index__close" onClick={actions.hideIndex}>
        &times;
      </button>
      <LevelsList levels={levels} rounds={rounds} actions={actions} latest={latest} />
    </div>
  );
}

const LevelsList = ({levels, rounds, actions, latest}) => (
  <div className="course-index__levels">
    {map(levels, lvl => (
      <div
        className={classNames("course-index__level", {
          'incomplete': parseInt(lvl.level, 10) > latest,
        })}
        key={lvl.level}>
        <Link className="level-name" to={`/level/${lvl.level}`} onClick={actions.hideIndex}>
          <div className="bubble">{lvl.level}</div>
          <span className="name">{lvl.name}</span>
        </Link>

        <RoundsList level={lvl} rounds={rounds} actions={actions} latest={latest} />
      </div>
    ))}
  </div>
);

const RoundsList = ({level, rounds, actions, latest}) => (
  <div className="course-index__rounds">
    {map(level.rounds, round => (
      <div
        className={classNames("course-index__round", {
          'incomplete': parseFloat(`${level.level}.${rounds[round].round}`) > latest,
        })}
        key={round}>
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
    latest: ['user', 'latest'],
  },
  actions: { hideIndex },
});