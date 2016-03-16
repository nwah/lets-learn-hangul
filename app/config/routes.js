import { isEmpty } from 'lodash';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { loadCourse, loadShapes } from '../actions/data';

// Top level
import App from '../components/App';
import Landing from '../components/Landing';

// Level
import Level from '../components/Level';
import LevelIntro from '../components/LevelIntro';
import LevelComplete from '../components/LevelComplete';

// Round
import Round from '../components/Round';
import RoundIntro from '../components/RoundIntro';
import RoundLetters from '../components/RoundLetters';
import RoundHeadword from '../components/RoundHeadword';
import RoundReady from '../components/RoundReady';
import RoundLearn from '../components/RoundLearn';
import RoundComplete from '../components/RoundComplete';

export function createRoutes(tree) {

  function onEnterLevel({params}) {
    if (isEmpty(tree.get('levels'))) {
      loadCourse(tree);
    }
  }

  function onEnterRound({params}) {
    if (isEmpty(tree.get('shapes'))) {
      loadShapes(tree);
    }
  }

  function onEnterRoundLearn({params}, replace) {
    let session = tree.get('session');
    if (!session || !session.active) {
      // replace(`/level/${params.level}/round/${params.round}`);
      replace(`/level/${params.level}/round/${params.round}/ready`);
    }
  }

  return (
    <Route path="/" component={App}>      
      <IndexRoute component={Landing} />

      <Route path="/level/:level" component={Level} onEnter={onEnterLevel} >
        <IndexRoute component={LevelIntro} />

        <Route path="round/:round" component={Round} onEnter={onEnterRound}>
          <IndexRoute component={RoundIntro} />
          <Route path="letters" component={RoundLetters} />
          <Route path="headword" component={RoundHeadword} />
          <Route path="ready" component={RoundReady} />
          <Route path="learn" component={RoundLearn} onEnter={onEnterRoundLearn} />
          <Route path="complete" component={RoundComplete} />
        </Route>

        <Route path="complete" component={LevelComplete} />
      </Route>
    </Route>
  );
}