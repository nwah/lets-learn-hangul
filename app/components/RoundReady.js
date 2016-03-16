import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { startSession } from '../actions';

const RoundReady = ({params, dispatch, round, level}) => {
  function startClicked() {
    dispatch(startSession(level, round));
    browserHistory.push(`/level/${params.level}/round/${params.round}/learn`);
  }

  return (
    <div className="round__ready">
      <p>R U READY!?!?</p>
      <button onClick={startClicked}>
        YEAH!
      </button>
    </div>
  );
};

export default RoundReady;