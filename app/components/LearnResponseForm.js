import React from 'react';
import { map } from 'lodash';
import { branch } from 'baobab-react/higher-order';
import { updateResponse, submitResponse } from '../actions/session';
import classNames from 'classnames';

const LearnResponseForm = ({actions, response, responseError, showCorrect}) => (
  <form action="#"
    className="learn-response-form"
    onSubmit={e => {
      e.preventDefault();
      actions.submitResponse(response);
    }}
  >
    <input type="text"
      className={classNames("fat-input", {
        correct: !!showCorrect,
      })}
      value={response}
      onChange={e => actions.updateResponse(e.target.value)}
      disabled={!!showCorrect}
      autoFocus data-autofocus="true"
    />

    {responseError && (
      <div className="learn-response-form__highlight">
        {responseError.wrongChar
          ? <span>
              {response.substr(0, responseError.wrongChar)}
              <span className="wrong">{response.substr(responseError.wrongChar, 1)}</span>
              {response.substr(responseError.wrongChar + 1)}
            </span>
          : response
        }
      </div>
    )}
  </form>
);

export default branch(LearnResponseForm, {
  actions: { updateResponse, submitResponse },
  cursors: {
    response: ['session', 'response'],
    responseError: ['session', 'responseError'],
    showCorrect: ['session', 'showCorrect'],
  }
});