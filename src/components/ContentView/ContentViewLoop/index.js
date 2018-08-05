import React from 'react';
import ContentItem from '../ContentItem';

const ContentViewLoop = ({ posts }) => {
  if (posts.length > 0) {
    return (
      <div>{posts.map((item, i) => <ContentItem vals={item} key={i} />)}</div>
    );
  } else {
    return <div>Sorry, no posts dipshit.</div>;
  }
};

export default ContentViewLoop;
