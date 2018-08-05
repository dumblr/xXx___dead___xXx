import React from 'react';

const DeadLink = ({ href, children }) => (
  <a href={href} style={{ color: 'green' }}>
    {children}
  </a>
);

export default DeadLink;
