import React from 'react';
import { branch } from 'baobab-react/higher-order';
import { updateResponse, submitResponse } from '../actions/session';

const LearnResponseForm = ({actions, response, responseError}) => (
  <form action="#"
    onSubmit={e => {
      e.preventDefault();
      actions.submitResponse(response);
    }}
  >
    <input type="text"
      value={response}
      onChange={e => actions.updateResponse(e.target.value)}
    />

    {responseError ? responseError : null}
  </form>
);

export default branch(LearnResponseForm, {
  actions: { updateResponse, submitResponse },
  cursors: {
    response: ['session', 'response'],
    responseError: ['session', 'responseError']
  }
});