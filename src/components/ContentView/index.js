import React from 'react';

import ContentViewLoop from './ContentViewLoop';

const ContentView = ({ posts, postDisplay, deletePost }) => (
  <section className={'ContentView'}>
    {postDisplay === 'mine' && (
      <ContentViewLoop deletePost={deletePost} posts={posts} />
    )}
    {postDisplay === 'theirs' && (
      <ContentViewLoop deletePost={deletePost} posts={posts} />
    )}
  </section>
);

export default ContentView;
