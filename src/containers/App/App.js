import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import sortBy from 'lodash.sortby';

import ContentViewContainer from '../ContentViewContainer';
import urlEnv from '../../utils/urlEnv';
import PostContainer from '../PostContainer/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentSelectionOpen: false,
      correctBrowser: false,
      isOwner: false,
      posts: [],
      postDisplay: 'theirs'
    };
  }

  async componentDidMount() {
    if (navigator.userAgent.indexOf('BeakerBrowser') !== -1) {
      this.setState({
        correctBrowser: true
      });
    }
    try {
      const archive = await new global.DatArchive(urlEnv());
      const archiveInfo = await archive.getInfo();
      this.refreshPosts(archive);
      this.setInfo(archiveInfo);
      console.log('success');
    } catch (error) {
      console.log(error);
    }
  }

  setInfo = archiveInfo => {
    this.setState({
      ...(archiveInfo.isOwner && { isOwner: true }),
      deadTitle: archiveInfo.title,
      deadDescription: archiveInfo.description
    });
  };

  refreshPosts = async archive => {
    const posts = await archive.readdir('/posts');
    if (posts.length === 0) {
      this.setState({
        posts: []
      });
    } else {
      const promises = posts.map(async post => {
        const postResponse = await archive.readFile(`/posts/${post}`);
        return JSON.parse(postResponse);
      });
      const results = await Promise.all(promises);
      this.setState({
        posts: results
      });
    }
  };

  toggleContentSelection = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        contentSelectionOpen: !prevState.contentSelectionOpen
      };
    });
  };

  togglePostDisplay = val => {
    this.setState(prevState => {
      return {
        ...prevState,
        postDisplay: val
      };
    });
  };

  deletePost = async postId => {
    const archive = await new global.DatArchive(urlEnv());
    await archive.unlink(`/posts/${postId}.json`);
    this.refreshPosts(archive);
  };

  deletePostSingle = async postId => {
    const archive = await new global.DatArchive(urlEnv());
    await archive.unlink(`/posts/${postId}.json`);
    window.location.href = '/';
  };

  render() {
    const sortedPosts = sortBy(this.state.posts, ['createdAt']);
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <ContentViewContainer
                contentSelectionOpen={this.state.contentSelectionOpen}
                toggleContentSelection={this.toggleContentSelection}
                postDisplay={this.state.postDisplay}
                posts={sortedPosts}
                isOwner={this.state.isOwner}
                getPosts={this.refreshPosts}
                togglePostDisplayFn={this.togglePostDisplay}
                correctBrowser={this.state.correctBrowser}
                deletePost={this.deletePost}
                deadTitle={this.state.deadTitle}
                deadDescription={this.state.deadDescription}
              />
            )}
          />
          <Route
            path="/post/:postId"
            render={props => (
              <PostContainer
                contentSelectionOpen={this.state.contentSelectionOpen}
                toggleContentSelection={this.toggleContentSelection}
                togglePostDisplayFn={this.togglePostDisplay}
                getPosts={this.refreshPosts}
                isOwner={this.state.isOwner}
                correctBrowser={this.state.correctBrowser}
                deletePost={this.deletePostSingle}
                deadTitle={this.state.deadTitle}
                deadDescription={this.state.deadDescription}
                {...props}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
