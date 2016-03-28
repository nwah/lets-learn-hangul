import React from 'react';

const basePath = '/images/';

const Image = (props) => (
  <img {...props} src={`${basePath}${props.src}`} />
);

export default Image;