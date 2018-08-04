import React, { Component } from 'react';
import { DAT_URL } from './../../config';

import ContentViewContainer from '../ContentViewContainer';
// import PostContainer from '../PostContainer';

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
  //--- TO DO: For some reason this is firing but not updating the UI...
  refreshPosts = async archive => {
    console.log('hmm');
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
      this.setState(
        {
          posts: results
        },
        console.log('hmm hmmm')
      );
    }
  };

  render() {
    return (
      <div>
        <ContentViewContainer
          posts={this.state.posts}
          postDisplay={'mine'}
          refreshPosts={this.refreshPosts}
        />
      </div>
    );
  }
}

export default App;
