import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ContentViewContainer from '../ContentViewContainer';
import PostContainer from '../PostContainer';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ContentViewContainer} />
        <Route path="/post/:postId" component={PostContainer} />
      </div>
    </Router>
  );
};

export default App;
