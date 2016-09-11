import React from 'react';
import { branch } from 'baobab-react/higher-order';
import classNames from 'classnames';
import YouAreHere from './YouAreHere';
import Logo from './Logo';
import TransitionGroup from 'react-addons-transition-group';

class Level extends React.Component {
  render() {
    let {children, params, location, level, levels} = this.props;
    if (!level) return <noscript />;

    let match = /^\/level\/(\d+)(\/?[^\/\?]*|)/.exec(location.pathname);
    let key = `${match[1]}${match[2] || '/intro'}`;

    return (
      <div className="level-container">
        <div className={classNames("level", {
          'level--learning': /\/learn/.test(location.pathname),
          'level--round-complete': /\/round\/\d+\/complete/.test(location.pathname),
        })}>
          <Logo />
          <YouAreHere params={params} />
          <TransitionGroup>
            {React.cloneElement(children, {key, levels, level, params})}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default branch(Level, {
  cursors({params}) {
    return {
      levels: ['levels'],
      level: ['levels', params.level]
    };
  }
});