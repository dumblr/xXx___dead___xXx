import React from 'react';
import ContentItem from '../ContentItem';

const ContentViewLoop = ({ posts }) => (
  <div>{posts && posts.map((x, i) => <ContentItem vals={x} key={i} />)}</div>
);

export default ContentViewLoop;
