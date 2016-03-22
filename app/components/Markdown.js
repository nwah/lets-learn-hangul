import React from 'react';
import Remarkable from 'react-remarkable';
import { merge } from 'lodash';

const Markdown = ({source, options, container, children}) => (
  <Remarkable
    source={source}
    container={container}
    options={merge({
      html: true,
      breaks: true
    }, options)}>
    {children}
  </Remarkable>
);


export default Markdown;