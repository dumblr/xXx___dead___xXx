import React from 'react';

const Follows = ({ follows }) => (
  <div className="Profile">
    {follows &&
      follows.map((follow, i) => (
        <div className="Following-Item" key={i}>
          <a href={follow.url}>{follow.name}</a>
        </div>
      ))}
  </div>
);
export default Follows;
