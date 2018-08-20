import React from 'react';

import ContentViewLoop from './ContentViewLoop';

const ContentView = ({
  posts,
  postDisplay,
  deletePost,
  correctBrowser,
  isOwner
}) => (
  <section className={'ContentView'}>
    {correctBrowser &&
      postDisplay === 'mine' && (
        <ContentViewLoop
          deletePost={deletePost}
          posts={posts}
          isOwner={isOwner}
        />
      )}
    {correctBrowser &&
      postDisplay === 'theirs' && (
        <ContentViewLoop
          deletePost={deletePost}
          posts={posts}
          isOwner={isOwner}
        />
      )}
  </section>
);

export default ContentView;
