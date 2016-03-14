import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import BigWord from './BigWord';

const mapStateToProps = ({session}) => ({session});

const RoundLearn = ({params, session}) => (
  <div className="round__learn">
    <p>Learnin learnin learnin</p>
    <BigWord word={session.word} />
  </div>
);

export default connect(mapStateToProps)(RoundLearn);