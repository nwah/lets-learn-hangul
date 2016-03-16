import React from 'react';
import { updateResponse, submitResponse } from '../actions';

class LearnResponseForm extends React.Component {
  onInput(e) {
    this.props.dispatch(updateResponse(e.target.value));
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(submitResponse());
  }

  render() {
    let {response} = this.props.session;
    return (
      <form action="#" onSubmit={this.onSubmit.bind(this)}>
        <input type="text" value={response} onChange={this.onInput.bind(this)} />
      </form>
    );
  }
}

export default LearnResponseForm;