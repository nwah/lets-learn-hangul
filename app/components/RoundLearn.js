import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import BigWord from './BigWord';
import LearnResponseForm from '../containers/LearnResponseForm';

const mapStateToProps = ({session}) => ({session});

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

export default connect(mapStateToProps)(RoundLearn);