import React from 'react';
import { branch } from 'baobab-react/higher-order';
import { startSession } from '../actions/session';

const RoundReady = ({params, actions, level, round}) => (
  <div className="round__ready">
    <p>R U READY!?!?</p>
    <button onClick={() => actions.startSession(level, round)}>
      YEAH!
    </button>
  </div>
);

export default branch(RoundReady, {
  actions: { startSession }
});