import React, { Component } from 'react';
import { DAT_URL } from './config';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';
import Header from './components/Header';
import fileContents from './utils/fileContents';
import { v4 } from 'uuid';
import NoPosts from './components/NoPosts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      linkField: '',
      textareaField: '',
      isOwner: false,
      listTitle: ''
    };
  }

  async componentDidMount() {
    const archive = await new global.DatArchive(DAT_URL);
    const archiveInfo = await archive.getInfo();
    console.log('info', archiveInfo);
    this.getPosts(archive);
    this.setInfo(archiveInfo);
  }

  getPosts = async archive => {
    const posts = await archive.readdir('/posts');

    posts.map(async post => {
      // wow what a hack
      if (post !== '.DS_Store') {
        const postItem = await archive.readFile(`/posts/${post}`);
        let myPosts = this.state.posts;
        myPosts.push(JSON.parse(postItem));
        this.setState({
          posts: myPosts
        });
      }
    });
  };

  setInfo = archiveInfo => {
    if (archiveInfo.isOwner) {
      this.setState({
        isOwner: true,
        listTitle: archiveInfo.title
      });
    } else {
      this.setState({
        listTitle: archiveInfo.title
      });
    }
  };

  fieldChange = (e, str) => {
    this.setState({
      [str]: e.target.value
    });
  };

  formSubmit = e => {
    e.preventDefault();
    this.writePost(this.state.linkField, this.state.textareaField);
  };

  writePost = async (linkField, textareaField) => {
    const newPostId = await v4();
    const archive = await new global.DatArchive(DAT_URL);
    await archive.writeFile(
      `/posts/${newPostId}.json`,
      fileContents(linkField, textareaField, newPostId)
    );

    this.setState({
      textareaField: '',
      linkField: ''
    });
  };

  deleteLink = async postId => {
    console.log('deleting', postId);
    const archive = await new global.DatArchive(DAT_URL);
    await archive.unlink(`/posts/${postId}.json`);
  };

  render() {
    return (
      <div>
        {console.log(this.state.posts)}
        <Header listTitle={this.state.listTitle} />
        {this.state.isOwner && (
          <LinkForm
            changeFn={this.fieldChange}
            submitFn={this.formSubmit}
            linkField={this.state.linkField}
            textareaField={this.state.textareaField}
          />
        )}

        {this.state.posts.length ? (
          <LinkList
            links={this.state.posts}
            isOwner={this.state.isOwner}
            deleteFn={this.deleteLink}
          />
        ) : (
          <NoPosts />
        )}
      </div>
    );
  }
}

export default App;
