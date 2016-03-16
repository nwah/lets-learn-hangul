import React from 'react';

const Level = ({children, params, level}) => {
  if (!level) return <noscript />;

  return (
    <div className="level">
      <h3>{level.name}</h3>
      {React.cloneElement(children, {level})}
    </div>
  );
}

export default Level;