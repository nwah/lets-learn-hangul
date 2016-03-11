import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Top level
import App from './components/App';
import Landing from './components/Landing';

// Level
import Level from './components/Level';
import LevelIntro from './components/LevelIntro';
import LevelComplete from './components/LevelComplete';

// Round
import Round from './components/Round';
import RoundIntro from './components/RoundIntro';
import RoundLetters from './components/RoundLetters';
import RoundHeadword from './components/RoundHeadword';
import RoundReady from './components/RoundReady';
import RoundLearn from './components/RoundLearn';
import RoundComplete from './components/RoundComplete';

module.exports = (
  <Route path="/" component={App}>      
    <IndexRoute component={Landing} />

    <Route path="/level/:level" component={Level}>
      <IndexRoute component={LevelIntro} />

      <Route path="round/:round" component={Round}>
        <IndexRoute component={RoundIntro} />
        <Route path="letters" component={RoundLetters} />
        <Route path="word" component={RoundLetters} />
        <Route path="headword" component={RoundHeadword} />
        <Route path="ready" component={RoundReady} />
        <Route path="learn/:word" component={RoundLearn} />
        <Route path="complete" component={RoundComplete} />
      </Route>

      <Route path="complete" component={LevelComplete} />
    </Route>
  </Route>
);