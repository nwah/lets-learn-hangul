import React from 'react';
import Markdown from 'react-remarkable';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import Circle from './Circle';
import Confetti from './Confetti';
import Congratulations from './Congratulations';

const LearnedEmAll = ({params}) => {
  return (
    <div className="learned-em-all">
      <Confetti />

      <div className="learned-em-all__title">
        <Circle r="474" />
        <Congratulations className="learned-em-all__title__calligraphy" />
        <h1>Congratulations!</h1>
        <p>You’ve learned all 40 Hangul letters!</p>
      </div>

      <div className="learned-em-all__more">
        <Circle r="252" />
        <h3>But wait, there’s more!</h3>
        <p>Learn a few special pronunciation rules and you’ll really be able to read Korean like a pro.</p>
        <Link to={'/level/5'} className="button button--forward" data-autofocus="true">
          Go to final level
        </Link>
      </div>
    </div>
  );
}

export default branch(LearnedEmAll, {

});