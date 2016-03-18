import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Circle from './Circle';
import BigWord from './BigWord';
import LearnResponseForm from './LearnResponseForm';

const RoundLearn = ({params, session, shapes}) => {
  let {words, current, response} = session;

  return (
    <div className="round__learn">
      <div className="round__learn__new-word">
        <Circle />
        <label>New word</label>
        <BigWord word={words[current]} shapes={shapes} />
      </div>

      <div className="round__learn__entry">
        <Circle />
        <label>Type it in English</label>
        <LearnResponseForm />
      </div>
    </div>
  );
}

export default branch(RoundLearn, {
  cursors: {
    session: ['session']
  }
});