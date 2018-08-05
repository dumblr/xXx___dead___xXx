import React from 'react';

import Header from '../../components/Header';
import ContentView from '../../components/ContentView';

const ContentViewContainer = ({
  getPosts,
  postDisplay,
  togglePostDisplayFn,
  toggleContentSelection,
  posts,
  contentSelectionOpen
}) => (
  <div className="App">
    <Header
      contentSelectionOpen={contentSelectionOpen}
      postDisplay={postDisplay}
      togglePostDisplay={togglePostDisplayFn}
      getPosts={getPosts}
      toggleContentSelection={toggleContentSelection}
    />
    <ContentView postDisplay={postDisplay} posts={posts} />
  </div>
);

export default ContentViewContainer;
