import React from 'react';

import ContentViewLoop from './ContentViewLoop';

const ContentView = ({ posts, postDisplay }) => (
  <section className={'ContentView'}>
    {postDisplay === 'mine' && <ContentViewLoop posts={posts} />}
    {postDisplay === 'theirs' && <ContentViewLoop posts={posts} />}
  </section>
);

export default ContentView;
