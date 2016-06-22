import React from 'react';
import { branch } from 'baobab-react/higher-order';
import YouAreHere from './YouAreHere';

const Round = ({location, params, children, level, round, shapes, jamos, words}) => {
  let showYouAreHere = !(/\/level\/\d+\/round\/\d+\/complete/).test(location.pathname);
  return (
    !round ? <noscript /> :
    <div className="round">
      { showYouAreHere && <YouAreHere params={params} />}
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