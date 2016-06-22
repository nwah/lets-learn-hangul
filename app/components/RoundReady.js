import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Markdown from 'react-remarkable';
import { startSession } from '../actions/session';

const RoundReady = ({params, actions, level, round}) => (
  <div className="round__ready">
    { round.text.start ? (
      <Markdown source={round.text.start[0]} />
    ) : (
      <p>Ready to learn this round's words?</p>
    )}
    <button onClick={() => actions.startSession(level, round)} autoFocus>
      Start!
    </button>
  </div>
);

export default branch(RoundReady, {
  actions: { startSession }
});