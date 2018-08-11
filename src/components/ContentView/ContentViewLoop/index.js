import React from 'react';
import ContentItem from '../ContentItem';

const ContentViewLoop = ({ posts, deletePost }) => (
  <div>
    {posts.length > 0 ? (
      posts.map((x, i) => (
        <ContentItem deletePost={deletePost} vals={x} key={i} />
      ))
    ) : (
      <p>Sorry, no posts dumb dumb.</p>
    )}
  </div>
);

export default ContentViewLoop;
