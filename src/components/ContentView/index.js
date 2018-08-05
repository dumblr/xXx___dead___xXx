import React from 'react';

import ContentViewLoop from './ContentViewLoop';

class ContentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myPosts: [],
      theirPosts: []
    };
  }

  componentDidMount() {
    this.setState({
      myPosts: this.props.posts
    });
  }

  render() {
    return (
      <section className={'ContentView'}>
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
