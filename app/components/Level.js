import React from 'react';
import { branch } from 'baobab-react/higher-order';
import CourseIndex from './CourseIndex';

const Level = ({children, params, level, indexShowing}) => {
  if (!level) return <noscript />;

  return (
    <div className="level-container">
      { indexShowing && <CourseIndex /> }

      <div className="level">
        {React.cloneElement(children, {level, params})}
      </div>
    </div>
  );
}

export default branch(Level, {
  cursors({params}) {
    return {
      level: ['levels', params.level],
      indexShowing: ['indexShowing']
    };
  }
});