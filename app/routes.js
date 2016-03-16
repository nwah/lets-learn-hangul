import { isEmpty } from 'lodash';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { loadCourse, loadShapes } from './actions';

// Top level
import App from './components/App';
import Landing from './components/Landing';

// Level
import ActiveLevel from './containers/ActiveLevel';
import LevelIntro from './components/LevelIntro';
import LevelComplete from './components/LevelComplete';

// Round
import ActiveRound from './containers/ActiveRound';
import RoundIntro from './components/RoundIntro';
import RoundLetters from './components/RoundLetters';
import RoundHeadword from './components/RoundHeadword';
import RoundReady from './components/RoundReady';
import RoundLearn from './containers/RoundLearnSession';
import RoundComplete from './components/RoundComplete';

// TODO: this is kinda dumb
export function createRoutes({ getState, dispatch }) {

  function onEnterLevel({params}) {
    if (isEmpty(getState().levels)) {
      dispatch(loadCourse());
    }
  }

  function onEnterRound({params}) {
    if (isEmpty(getState().shapes)) {
      dispatch(loadShapes());
    }
  }

  function onEnterRoundLearn({params}, replace) {
    let state = getState();
    if (!state.session || !state.session.active) {
      // replace(`/level/${params.level}/round/${params.round}`);
      replace(`/level/${params.level}/round/${params.round}/ready`);
    }
  }

  return (
    <Route path="/" component={App}>      
      <IndexRoute component={Landing} />

      <Route path="/level/:level" component={ActiveLevel} onEnter={onEnterLevel} >
        <IndexRoute component={LevelIntro} />

        <Route path="round/:round" component={ActiveRound} onEnter={onEnterRound}>
          <IndexRoute component={RoundIntro} />
          <Route path="letters" component={RoundLetters} />
          <Route path="headword" component={RoundHeadword} />
          <Route path="ready" component={RoundReady} />
          <Route path="learn" component={RoundLearnSession} onEnter={onEnterRoundLearn} />
          <Route path="complete" component={RoundComplete} />
        </Route>

        <Route path="complete" component={LevelComplete} />
      </Route>
    </Route>
  );
}