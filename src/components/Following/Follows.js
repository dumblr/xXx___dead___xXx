import React from 'react';

const Follows = ({ follows }) => (
  <div className="Following">
    {follows &&
      follows.map((follow, i) => (
        <div className="Following__Item" key={i}>
          <a href={follow.url}>{follow.name}</a>
        </div>
      ))}
  </div>
);
export default Follows;
