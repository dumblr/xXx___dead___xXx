import React from 'react';

import ContentViewLoop from './ContentViewLoop';
import Settings from './Settings';

const ContentView = ({ posts, postDisplay, deletePost }) => (
  <section className={'ContentView'}>
    {postDisplay === 'mine' && (
      <ContentViewLoop deletePost={deletePost} posts={posts} />
    )}
    {postDisplay === 'theirs' && (
      <ContentViewLoop deletePost={deletePost} posts={posts} />
    )}
    {postDisplay === 'settings' && <Settings />}
  </section>
);

export default ContentView;
