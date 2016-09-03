import React from 'react';
import Markdown from 'react-remarkable';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import Circle from './Circle';

const LevelComplete = ({nextLevel, params, level}) => {
  let path =  
    nextLevel && nextLevel.level == 5 ? `/learnedemall`
    : nextLevel ? `/level/${nextLevel.level}`
    : `/learnedeverything`
  ;

  return (
    <div className="level__complete">
      <Circle className="level__complete__circle" r="128" />

      <div className="level__complete__inner">
        <h1>
          <b>Level&nbsp;Complete!</b><br />
          <span style={{whiteSpace: 'nowrap'}}>“{level.name}”</span>
        </h1>
      </div>

      <div className="bubble level__complete__level">
        {params.level}
      </div>
      <label className="level__complete__level-label">
        Level
      </label>

      <div className="level__intro__buttons back-forward-buttons">
        <Link to={path} className="button button--forward level__complete__continue" data-autofocus="true">
          Continue
        </Link>
      </div>
    </div>
  );
}

export default branch(LevelComplete, {
  cursors({params}) {
    return {
      nextLevel: ['levels', parseFloat(params.level) + 1]
    };
  }
});