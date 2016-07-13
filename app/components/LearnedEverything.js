import React from 'react';
import Markdown from 'react-remarkable';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import Circle from './Circle';

const LearnedEverything = ({params}) => {
  return (
    <div className="learned-everything">
      <h1>Woooooo!</h1>
      <p>That’s it. The End. You can read Korean now. Bye</p>
    </div>
  );
}

export default branch(LearnedEverything, {

});