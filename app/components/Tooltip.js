import React from 'react';
import { noop } from 'lodash';
import classNames from 'classnames';

class Tooltip extends React.Component {
  state = {showing: false};

  componentDidMount() {
    setTimeout(() => this.setState({showing: true}), 20);
  }

  render() {
    let {text, onClick, name} = this.props;
    let {showing} = this.state;

    return (
      <div
        className={classNames('tooltip', (name || ''), {showing})}
        onClick={onClick || noop}>
        <div className="tooltip__body">
          {text}
        </div>
        <div className="tooltip__point" />
      </div>
    );
  }
}

export default Tooltip;