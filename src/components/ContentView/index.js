import React from 'react';
// import ReactDOM from 'react-dom';

import styles from './ContentView.modules.scss';
import ContentViewLoop from './ContentViewLoop';

class ContentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myPosts: [],
      theirPosts: []
    };

    this.getMyPosts = this.getMyPosts.bind(this);
    this.pushMyPosts = this.pushMyPosts.bind(this);

    this.getTheirPosts = this.getTheirPosts.bind(this);
    this.pushTheirPosts = this.pushTheirPosts.bind(this);
  }

  componentDidMount() {
    //--- Include Dat address here....
    const archive = new global.DatArchive(
      `e03d0ae6a70caebf2f65408b77d5737ff18863568618594132ea7f76861852e7`
    );
    this.getMyPosts(archive);
    // this.getTheirPosts(archive);
  }

  async getMyPosts(archive) {
    let myHead = await archive.readFile('/mine/head.json');

    await JSON.parse(myHead).posts.map((post, key) => {
      this.pushMyPosts(post.id, archive);
    });
  }

  async getTheirPosts(archive) {
    let myHead = await archive.readFile('/theirs/head.json');

    await JSON.parse(myHead).posts.map((post, key) => {
      this.pushTheirPosts(post.id, archive);
    });
  }

  async pushMyPosts(postId, archive) {
    let post = await archive.readFile(`/mine/posts/` + postId + `.json`);
    let myPosts = this.state.myPosts;

    myPosts.push(JSON.parse(post));
    this.setState({
      myPosts: myPosts
    });
  }

  async pushTheirPosts(postId, archive) {
    let post = await archive.readFile(
      `/files/theirs/posts/` + postId + `.json`
    );
    let theirPosts = this.state.theirPosts;

    theirPosts.push(JSON.parse(post));
    this.setState({
      theirPosts: theirPosts
    });
  }

  render() {
    return (
      <section className={styles.ContentView}>
        {this.props.postDisplay === 'mine' && (
          <ContentViewLoop posts={this.state.myPosts} />
        )}
        {this.props.postDisplay === 'theirs' && (
          <ContentViewLoop posts={this.state.theirPosts} />
        )}
      </section>
    );
  }
}

export default ContentView;
