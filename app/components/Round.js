import React from 'react';
import { branch } from 'baobab-react/higher-order';

const Round = ({location, params, children, level, round, shapes, jamos, words}) => {
  return (
    !round ? <noscript /> :
    <div className="round">
      {React.cloneElement(children, {level, round, shapes, jamos, words})}
    </div>
  );
};

export default branch(Round, {
  cursors({params}) {
    let {level, round} = params;
    return {
      level: ['levels', level],
      round: ['rounds', `${level}.${round}`],
      jamos: ['jamos'],
      shapes: ['shapes'],
      words: ['words']
    };
  }
});