import React from 'react';
import { branch } from 'baobab-react/higher-order';
import classNames from 'classnames';
import YouAreHere from './YouAreHere';
import Logo from './Logo';

const Level = ({children, params, location, level}) => {
  if (!level) return <noscript />;

  return (
    <div className="level-container">
      <div className={classNames("level", {
        'level--learning': /\/learn/.test(location.pathname),
        'level--round-complete': /\/round\/\d+\/complete/.test(location.pathname),
      })}>
        <Logo />
        <YouAreHere params={params} />
        {React.cloneElement(children, {level, params})}
      </div>
    </div>
  );
}

export default branch(Level, {
  cursors({params}) {
    return {
      level: ['levels', params.level]
    };
  }
});