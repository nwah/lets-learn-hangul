import React from 'react';
import { branch } from 'baobab-react/higher-order';
import BigWord from './BigWord';
import LearnResponseForm from './LearnResponseForm';

const RoundLearn = ({params, session, shapes}) => {
  let {words, current, response} = session;

  return (
    <div className="round__learn">
      <p>Learnin learnin learnin</p>
      <BigWord word={words[current]} shapes={shapes} />
      <LearnResponseForm />
    </div>
  );
}

export default branch(RoundLearn, {
  cursors: {
    session: ['session']
  }
});