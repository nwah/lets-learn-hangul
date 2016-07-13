import { isEmpty } from 'lodash';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
  loadCourse,
  loadShapes,
  loadJamos,
  loadWords,
  loadGeometric,
} from '../actions/data';

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
import RoundLetter from '../components/RoundLetter';
import RoundLetters from '../components/RoundLetters';
import RoundHeadword from '../components/RoundHeadword';
import RoundReady from '../components/RoundReady';
import RoundLearn from '../components/RoundLearn';
import RoundComplete from '../components/RoundComplete';

// Special
import LearnedEmAll from '../components/LearnedEmAll';
import LearnedEverything from '../components/LearnedEverything';

export function createRoutes(tree) {

  function onEnterApp({params}) {
    if (isEmpty(tree.get('levels'))) {
      loadCourse(tree);
      loadGeometric(tree);
    }
  }

  function onEnterLevel({params}) {
    if (isEmpty(tree.get('shapes'))) {
      loadCourse(tree);
      loadWords(tree);
      loadShapes(tree);
      loadJamos(tree);
      loadGeometric(tree);
    }
  }

  function onEnterRound({params}) {
  }

  function onEnterRoundLearn({params}, replace) {
    let session = tree.get('session');
    if (!session || !session.active) {
      replace(`/level/${params.level}/round/${params.round}`);
    }
  }

  return (
    <Route path="/" component={App} onEnter={onEnterApp}>      
      <IndexRoute component={Landing} />

      <Route path="/level/:level(/intro/:levelIntro)" component={Level} onEnter={onEnterLevel} >
        <IndexRoute component={LevelIntro} />

        <Route path="round/:round(/intro/:roundIntro)" component={Round} onEnter={onEnterRound}>
          <IndexRoute component={RoundIntro} />
          <Route path="letters(/:letters)" component={RoundLetters} />
          <Route path="letter(/:letter)" component={RoundLetter} />
          <Route path="headword(/:headword)" component={RoundHeadword} />
          <Route path="ready" component={RoundReady} />
          <Route path="learn" component={RoundLearn} onEnter={onEnterRoundLearn} />
          <Route path="complete(/:roundComplete)" component={RoundComplete} />
        </Route>

        <Route path="complete(/:levelComplete)" component={LevelComplete} />
      </Route>

      <Route path="/learnedemall" component={LearnedEmAll} />
      <Route path="/learnedeverything" component={LearnedEverything} />
    </Route>
  );
}