import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import sortBy from 'lodash.sortby';
import urlEnv from '../../utils/urlEnv';
import profileContents from '../../utils/profileContents';
import { queryFollowers, followURLCheck } from '../../utils/following';

import ContentViewContainer from '../ContentViewContainer';
import Settings from '../Settings';
import PostContainer from '../PostContainer/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      contentSelectionOpen: false,
      correctBrowser: false,
      isOwner: false,
      posts: [],
      theirPosts: [],
      postDisplay: 'mine',
      editProfile: false,
      userData: {}
    };
  }

  async componentDidMount() {
    try {
      const archive = await new global.DatArchive(urlEnv());
      const archiveInfo = await archive.getInfo();
      const results = await this.refreshPosts(archive);
      const theirresults = await this.refreshTheirPosts(archive);
      const userData = await this.getUserInfo(archive);

      this.setState({
        correctBrowser: true,
        posts: results,
        theirPosts: theirresults,
        loading: false,
        ...(archiveInfo.isOwner && { isOwner: true }),
        deadTitle: archiveInfo.title,
        deadDescription: archiveInfo.description,
        userData
      });
    } catch (error) {
      console.log('try error', error);
      this.setState({
        loading: false,
        correctBrowser: false
      });
    }
  }

  getUserInfo = async archive => {
    const userData = await archive.readFile(`profile.json`);
    return JSON.parse(userData);
  };

  setInfo = archiveInfo => {
    this.setState({
      ...(archiveInfo.isOwner && { isOwner: true }),
      deadTitle: archiveInfo.title,
      deadDescription: archiveInfo.description
    });
  };

  refreshTheirPosts = async archive => {
    await queryFollowers();
    const posts = await archive.readdir('/theirposts');
    if (posts.length === 0) {
      this.setState({
        theirPosts: []
      });
    } else {
      const promises = posts.map(async post => {
        const postResponse = await archive.readFile(`/theirposts/${post}`);
        return JSON.parse(postResponse);
      });
      const results = await Promise.all(promises);
      return results;
    }
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
      return results;
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

  addFollower = e => {
    e.preventDefault();
    // 1. input dat URL into input field
    const followerFieldVal = document.querySelector('#add-follower-input')
      .value;
    // 2. regex in dat://

    /*---
      3. query for dat URL
      3a. return true or false message if valid dat URL
    ---*/
    const followerData = {
      name: '',
      url: followURLCheck(followerFieldVal)
    };
    if (followerData.url === '') {
      return null;
    }
    // 4. write to following array in profile.json
    this.setState(
      {
        userData: {
          avatar: this.state.userData.avatar,
          bio: this.state.userData.bio,
          name: this.state.userData.name,
          follows: [...this.state.userData.follows, followerData]
        }
      },
      () => this.changeUserData(this.state.userData)
    );
    document.querySelector('#add-follower-input').value = '';
  };

  updateUserData = e => {
    e.preventDefault();
    this.changeUserData(this.state.userData);
  };

  userDataChange = (e, str) => {
    this.setState({
      userData: {
        ...this.state.userData,
        [str]: e.target.value
      }
    });
  };

  changeUserData = async userData => {
    const archive = await new global.DatArchive(urlEnv());
    await archive.writeFile(`profile.json`, profileContents(userData));
    this.state.editProfile === true && this.toggleEdit();
  };

  toggleEdit = () =>
    this.setState({
      editProfile: !this.state.editProfile
    });

  sortedPosts = posts => sortBy(posts, ['createdAt']).reverse();

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <ContentViewContainer
                loading={this.state.loading}
                contentSelectionOpen={this.state.contentSelectionOpen}
                toggleContentSelection={this.toggleContentSelection}
                postDisplay={this.state.postDisplay}
                posts={this.sortedPosts(
                  this.state.postDisplay === 'theirs'
                    ? this.state.theirPosts
                    : this.state.posts
                )}
                isOwner={this.state.isOwner}
                getPosts={this.refreshPosts}
                togglePostDisplayFn={this.togglePostDisplay}
                correctBrowser={this.state.correctBrowser}
                deletePost={this.deletePost}
                deadTitle={this.state.deadTitle}
                deadDescription={this.state.deadDescription}
                userData={this.state.userData}
              />
            )}
          />
          <Route
            path="/post/:postId"
            render={props => (
              <PostContainer
                loading={this.state.loading}
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
          <Route
            path="/settings"
            render={props => (
              <Settings
                contentSelectionOpen={this.state.contentSelectionOpen}
                toggleContentSelection={this.toggleContentSelection}
                togglePostDisplayFn={this.togglePostDisplay}
                getPosts={this.refreshPosts}
                isOwner={this.state.isOwner}
                correctBrowser={this.state.correctBrowser}
                deadTitle={this.state.deadTitle}
                deadDescription={this.state.deadDescription}
                userData={this.state.userData}
                addFollower={this.addFollower}
                updateUserData={this.updateUserData}
                userDataChange={this.userDataChange}
                toggleEdit={this.toggleEdit}
                editProfile={this.state.editProfile}
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
