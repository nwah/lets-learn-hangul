import React from 'react';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import Markdown from 'react-remarkable';
import Circle from './Circle';
import { startSession } from '../actions/session';

const RoundReady = ({params, actions, level, round}) => {
  let headword = (round.text.word || []).length - 1;

  return (
    <div className="round__ready">
      <Circle className="round__ready__circle" r="128" />

      <div className="bubble bubble--blue round__ready__round">
        {round.round}
      </div>
      <label className="round__ready__round-label">
        Round
      </label>

      <div className="round__ready__inner">
        <h3>Ready?</h3>
        { round.text.start ? (
          <Markdown source={round.text.start[0]} />
        ) : (
          <p>Ready to learn this round's words?</p>
        )}
      </div>

      <Link
        className="button button--back button--link"
        to={`/level/${params.level}/round/${params.round}/headword${headword > 0 ? `/${headword}` : ''}`}>
        Back
      </Link>

      <button
        className="button button--forward"
        onClick={() => actions.startSession(level, round)}
        data-autofocus="true">
        Start!
      </button>
    </div>
  );
}

export default branch(RoundReady, {
  actions: { startSession }
});