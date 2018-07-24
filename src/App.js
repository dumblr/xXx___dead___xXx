import React, { Component } from 'react';
import { DAT_URL } from './config';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';
import Header from './components/Header';
import fileContents from './utils/fileContents';
import { v4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      linkField: '',
      textareaField: ''
    };
  }

  async componentDidMount() {
    const archive = await new global.DatArchive(DAT_URL);
    this.getPosts(archive);
  }

  getPosts = async archive => {
    const posts = await archive.readdir('/posts');

    posts.map(async post => {
      const postItem = await archive.readFile(`/posts/${post}`);
      let myPosts = this.state.posts;
      myPosts.push(JSON.parse(postItem));
      this.setState({
        posts: myPosts
      });
    });
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
    const archive = await new global.DatArchive(DAT_URL);
    await archive.writeFile(
      `/posts/${v4()}.json`,
      fileContents(linkField, textareaField)
    );

    this.setState({
      textareaField: '',
      linkField: ''
    });
  };

  render() {
    return (
      <div>
        <Header />
        <LinkForm
          changeFn={this.fieldChange}
          submitFn={this.formSubmit}
          linkField={this.state.linkField}
          textareaField={this.state.textareaField}
        />
        <LinkList links={this.state.posts} />
      </div>
    );
  }
}

export default App;
