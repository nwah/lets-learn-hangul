import React from 'react';
import { transitionableBranch } from '../utils/animation';
import TransitionGroup from 'react-addons-transition-group';

const Round = ({location, params, children, level, round, shapes, jamos, words}) => {
  let match = /\/round\/(\d+)(\/?[^\/\?]*|)/.exec(location.pathname);
  let key = `${match[1]}${match[2] || '/intro'}`;

  if (/\/letter(\/\d+)?$/.exec(location.pathname)) key += RegExp.$1 || '';

  return (
    !round ? <noscript /> :
    <div className="round">
      <TransitionGroup>
        {React.cloneElement(children, {level, round, shapes, jamos, words, key})}
      </TransitionGroup>
    </div>
  );
};

export default transitionableBranch(Round, {
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