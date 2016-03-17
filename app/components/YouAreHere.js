import React from 'react';
import { branch } from 'baobab-react/higher-order';
import { toggleIndex } from '../actions/navigation';

const YouAreHere = ({params, actions}) => {
  let {level, round} = params;

  return (
    <div className="you-are-here" onClick={actions.toggleIndex}>
      <span className="you-are-here__level">
        Level {level}
      </span>
      <span className="you-are-here__level">
        Round {round}
      </span>
    </div>
  );
}

export default branch(YouAreHere, {
  actions: { toggleIndex }
});