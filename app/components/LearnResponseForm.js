import React from 'react';
import classNames from 'classnames';
import { map } from 'lodash';
import { branch } from 'baobab-react/higher-order';
import { updateResponse, submitResponse } from '../actions/session';
import { getRomanizations } from '../utils';

class LearnResponseForm extends React.Component {
  componentDidMount() {
    setTimeout(() => this.refs.input.focus(), 10);
  }

  blur() {
    this.refs.input.blur();
    setTimeout(() => {
      document.querySelector('.round__learn__entry .button--forward').focus();
    }, 30);
  }

  render() {
    let {actions, response, responseError, showCorrect, word, onFocus} = this.props;
    let romanization = getRomanizations(word).ideal;

    return (
      <form action="#"
        className="learn-response-form"
        onSubmit={e => {
          e.preventDefault();
          let result = actions.submitResponse(response);
          if (result.correct) this.blur();
        }}
      >
        <input type="text"
          ref="input"
          className={classNames("fat-input", {
            correct: !!showCorrect,
          })}
          style={{
            width: Math.max(216, 36 + 22 * romanization.length) + 'px',
          }}
          value={response}
          onChange={e => actions.updateResponse(e.target.value)}
          onFocus={onFocus}
          autoCorrect="off"
          autoCapitalize="off"
          disabled={!!showCorrect}
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
  }
}

export default branch(LearnResponseForm, {
  actions: { updateResponse, submitResponse },
  cursors: {
    response: ['session', 'response'],
    responseError: ['session', 'responseError'],
    showCorrect: ['session', 'showCorrect'],
  }
});