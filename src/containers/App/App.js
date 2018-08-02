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
    this.getPosts(archive);
  }

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

  render() {
    console.log('app', this.state.posts);
    return (
      <div>
        <ContentViewContainer posts={this.state.posts} postDisplay={'mine'} />
      </div>
    );
  }
}

export default App;
