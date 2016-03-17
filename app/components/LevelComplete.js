import React from 'react';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';

const LevelComplete = ({nextLevel, params}) => {
  let path = nextLevel ? `/level/${nextLevel.level}` : `/complete`;

  return (
    <div className="level__complete">
      <p>Level Complete!</p>
      <Link to={path}>Continue</Link>
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