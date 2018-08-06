import React from 'react';
import { DAT_URL } from './../../config';
import Header from '../../components/Header';
import Post from '../../components/Post';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postDisplay: 'mine',
      postData: {}
    };
  }

  async componentDidMount() {
    const archive = await new global.DatArchive(DAT_URL);
    this.getPost(this.props.match.params.postId, archive);
  }

  togglePostDisplay = val => {
    this.setState({
      postDisplay: val
    });
  };

  getPost = async (postId, archive) => {
    const myPost = await archive.readFile('/posts/' + postId + '.json');
    const post = JSON.parse(myPost);
    this.setState({
      postData: post
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          postDisplay={this.state.postDisplay}
          togglePostDisplay={this.togglePostDisplay}
          hideMineToggle={true}
        />
        <Post post={this.state.postData} />
      </div>
    );
  }
}

export default PostContainer;
