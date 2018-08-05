import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { DAT_URL } from './../../config';

import ContentViewContainer from '../ContentViewContainer';
import PostContainer from '../PostContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    const archive = await new global.DatArchive(DAT_URL);
    const archiveInfo = await archive.getInfo();

    this.setInfo(archiveInfo);
    this.getPosts(archive);
  }

  setInfo = archiveInfo => {
    this.setState({
      ...(archiveInfo.isOwner && { isOwner: true }),
      listTitle: archiveInfo.title,
      listDescription: archiveInfo.description
    });
  };

  getPosts = async archive => {
    // read directory to get all file names
    const posts = await archive.readdir('/posts');
    // map over all file names, add each object to an array
    posts.map(async post => {
      // read the entire file
      const postItem = await archive.readFile(`/posts/${post}`);
      // get state for posts and push into state
      let myPosts = this.state.posts;
      myPosts.push(JSON.parse(postItem));
      this.setState({
        posts: myPosts
      });
    });
  };

  refreshPosts = async archive => {
    await this.setState(
      {
        posts: []
      },
      () => this.getPosts(archive)
    );
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <ContentViewContainer
                posts={this.state.posts}
                postDisplay={'mine'}
                getPosts={this.getPosts}
              />
            )}
          />
          <Route
            path="/post/:postId"
            render={props => <PostContainer {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
