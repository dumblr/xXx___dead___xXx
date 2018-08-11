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
          contentSelectionOpen={this.props.contentSelectionOpen}
          toggleContentSelection={this.props.toggleContentSelection}
          togglePostDisplay={this.props.togglePostDisplayFn}
          getPosts={this.props.getPosts}
          postDisplay={this.state.postDisplay}
          hideMineToggle={true}
        />
        <Post
          post={this.state.postData}
          isOwner={this.props.isOwner}
          deadTitle={this.props.deadTitle}
          deadDescription={this.props.deadDescription}
        />
      </div>
    );
  }
}

export default PostContainer;
