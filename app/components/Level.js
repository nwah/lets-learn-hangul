import React from 'react';
import { branch } from 'baobab-react/higher-order';

const Level = ({children, params, level}) => {
  if (!level) return <noscript />;

  return (
    <div className="level">
      <h3>{level.name}</h3>
      {React.cloneElement(children, {level})}
    </div>
  );
}

export default branch(Level, {
  cursors: {
    level: ['levels', '1']
  }
});