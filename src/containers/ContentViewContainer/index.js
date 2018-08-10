import React from 'react';

import Header from '../../components/Header';
import ContentView from '../../components/ContentView';
import BrowserDetection from '../../components/SharedComponents/BrowserDetection';

const ContentViewContainer = ({
  getPosts,
  postDisplay,
  togglePostDisplayFn,
  toggleContentSelection,
  posts,
  contentSelectionOpen,
  correctBrowser,
  deletePost
}) => (
  <div className="App">
    <Header
      contentSelectionOpen={contentSelectionOpen}
      postDisplay={postDisplay}
      togglePostDisplay={togglePostDisplayFn}
      getPosts={getPosts}
      toggleContentSelection={toggleContentSelection}
    />
    {!correctBrowser && <BrowserDetection />}
    <ContentView
      deletePost={deletePost}
      postDisplay={postDisplay}
      posts={posts}
    />
  </div>
);

export default ContentViewContainer;
