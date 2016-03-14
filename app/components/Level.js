import React from 'react';

const Level = ({children, params, level}) => {
  return (
    <div className="level">
      <h3>Level {params.level}</h3>
      {React.cloneElement(children, {level: {level: 1,name: "Level 1: Whet Your Appetite"}})}
    </div>
  );
}

export default Level;