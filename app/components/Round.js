import React from 'react';

const Round = ({children, dispatch, level, round, shapes}) => (
  !round ? <noscript /> :
  <div className="round">
    <h3>{round.name}</h3>
    {React.cloneElement(children, {dispatch, level, round, shapes})}
  </div>
);

export default Round;