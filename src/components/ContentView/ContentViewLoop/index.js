import React from 'react';
import ContentItem from '../ContentItem';

const ContentViewLoop = ({ posts, deletePost }) => (
  <div>
    {posts &&
      posts.map((x, i) => (
        <ContentItem deletePost={deletePost} vals={x} key={i} />
      ))}
  </div>
);

export default ContentViewLoop;
