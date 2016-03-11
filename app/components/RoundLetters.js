import React from 'react';
import {Link} from 'react-router';

const RoundLetters = ({children}) => (
  <div className="round__letters">
    <p>Here's the new letters</p>
    <h4>ㄱ ㄴ ㅎ ㅏ</h4>
    <Link to="/level/1/round/1/headword">See the word</Link>
  </div>
);

export default RoundLetters;