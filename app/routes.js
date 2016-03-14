import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { startSession } from './actions';

// Top level
import App from './components/App';
import Landing from './components/Landing';

// Level
import ActiveLevel from './components/ActiveLevel';
import LevelIntro from './components/LevelIntro';
import LevelComplete from './components/LevelComplete';

// Round
import ActiveRound from './components/ActiveRound';
import RoundIntro from './components/RoundIntro';
import RoundLetters from './components/RoundLetters';
import RoundHeadword from './components/RoundHeadword';
import RoundReady from './components/RoundReady';
import RoundLearn from './components/RoundLearn';
import RoundComplete from './components/RoundComplete';

// TODO: this is kinda dumb
export function createRoutes({ dispatch }) {
  function onEnterLearn({params}, replace) {
    dispatch(startSession(params.level, params.round));
  }

  return (
    <Route path="/" component={App}>      
      <IndexRoute component={Landing} />

      <Route path="/level/:level" component={ActiveLevel}>
        <IndexRoute component={LevelIntro} />

        <Route path="round/:round" component={ActiveRound}>
          <IndexRoute component={RoundIntro} />
          <Route path="letters" component={RoundLetters} />
          <Route path="headword" component={RoundHeadword} />
          <Route path="ready" component={RoundReady} />
          <Route path="learn" component={RoundLearn} onEnter={onEnterLearn} />
          <Route path="complete" component={RoundComplete} />
        </Route>

        <Route path="complete" component={LevelComplete} />
      </Route>
    </Route>
  );
}