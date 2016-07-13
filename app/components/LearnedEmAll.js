import React from 'react';
import Markdown from 'react-remarkable';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import Circle from './Circle';

const LearnedEmAll = ({params}) => {
  return (
    <div className="learned-em-all">
      <h1>You learned all the letters!!!!</h1>
      <p><em>BUT WAIT! THERE'S MORE!</em> You’ve learned all the letters, but there’s some pronunciation stuff left blah blah blah</p>

      <Link to={'/level/5'} className="button button--forward" autoFocus data-autofocus="true">
        Go to Level 5
      </Link>
    </div>
  );
}

export default branch(LearnedEmAll, {

});