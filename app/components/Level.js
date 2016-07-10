import React from 'react';
import { branch } from 'baobab-react/higher-order';

const Level = ({children, params, level}) => {
  if (!level) return <noscript />;

  return (
    <div className="level-container">
      <div className="level">
        {React.cloneElement(children, {level, params})}
      </div>
    </div>
  );
}

export default branch(Level, {
  cursors({params}) {
    return {
      level: ['levels', params.level]
    };
  }
});