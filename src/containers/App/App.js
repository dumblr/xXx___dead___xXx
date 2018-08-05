import React, { Component } from 'react';

import ContentViewContainer from '../ContentViewContainer';
import urlEnv from '../../utils/urlEnv';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postDisplay: 'mine',
      contentSelectionOpen: false
    };
  }

  async componentDidMount() {
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
      listTitle: archiveInfo.title,
      listDescription: archiveInfo.description
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

  render() {
    return (
      <div>
        <ContentViewContainer
          contentSelectionOpen={this.state.contentSelectionOpen}
          toggleContentSelection={this.toggleContentSelection}
          postDisplay={this.state.postDisplay}
          posts={this.state.posts}
          getPosts={this.refreshPosts}
          togglePostDisplayFn={this.togglePostDisplay}
        />
      </div>
    );
  }
}

export default App;
