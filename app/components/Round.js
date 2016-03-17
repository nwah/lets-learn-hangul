import React from 'react';
import { branch } from 'baobab-react/higher-order';

const Round = ({children, level, round, shapes}) => (
  !round ? <noscript /> :
  <div className="round">
    <h3>{round.name}</h3>
    {React.cloneElement(children, {level, round, shapes})}
  </div>
);

export default branch(Round, {
  cursors({params}) {
    let {level, round} = params;
    return {
      level: ['levels', level],
      round: ['rounds', `${level}.${round}`],
      shapes: ['shapes']
    };
  }
});