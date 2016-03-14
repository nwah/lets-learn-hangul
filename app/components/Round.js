import React from 'react';

const Round = ({children, params}) => (
  <div className="round">
    <h3>Round {params.round}</h3>
    {children}
  </div>
);

export default Round;