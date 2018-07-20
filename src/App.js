import React, { Component } from 'react';
import { DAT_URL } from './config';

class App extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    const archive = new global.DatArchive(DAT_URL);

    this.getPosts(archive);
  }

  getPosts = async archive => {
    const postsState = [];
    // read directory to get all file names
    const posts = await archive.readdir('/posts');

    // map over all file names, add each object to an array
    await posts.map(async post => {
      await console.log('post file name', post);
      // read the entire file
      const thing = await archive.readFile(`/posts/${post}`);
      await console.log(JSON.parse(thing));
      // add object to array
      postsState.push(JSON.parse(thing));
      return '';
    });

    // a setState function
    this.savePosts(postsState);
  };

  // setState
  savePosts = posts => {
    this.setState({
      posts
    });
  };

  render() {
    return (
      <div>
        {/* Initially, this will be empty, which is fine */}
        {/* A after we setState, this will re-render, and it will have all of our posts */}
        {console.log('posts in render', this.state.posts)}
        {/* This ternary will be true, but posts wont render from state? Why?  */}
        {this.state.posts ? (
          <div>yes {this.state.posts.map(x => <div>x.postId</div>)}</div>
        ) : (
          <div>no</div>
        )}
      </div>
    );
  }
}

export default App;
