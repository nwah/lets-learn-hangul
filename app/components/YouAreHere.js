import React from 'react';
import { branch } from 'baobab-react/higher-order';
import { toggleIndex } from '../actions/navigation';
import SmallWord from './SmallWord';

const YouAreHere = ({params, actions}) => {
  let {level, round} = params;

  return (
    <div className="you-are-here" onClick={actions.toggleIndex}>
      <span className="you-are-here__level">
        <div className="bubble">{level || '1'}</div>
        <SmallWord word="level" />
        <span className="english">Level</span>
      </span>
      <span className="you-are-here__round">
        <div className="bubble bubble--blue">
          {round || '1'}
        </div>
        <SmallWord word="round" />
        <span className="english">Round</span>
      </span>
    </div>
  );
}

export default branch(YouAreHere, {
  actions: { toggleIndex }
});