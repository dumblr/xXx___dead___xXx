import React from 'react';

import Header from '../../components/Header';
import ContentView from '../../components/ContentView';

class ContentViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postDisplay: 'mine'
    };
  }

  togglePostDisplay = val => {
    this.setState({
      postDisplay: val
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          postDisplay={this.state.postDisplay}
          togglePostDisplay={this.togglePostDisplay}
          refreshPosts={this.props.refreshPosts}
        />
        <ContentView
          postDisplay={this.state.postDisplay}
          posts={this.props.posts}
        />
      </div>
    );
  }
}

export default ContentViewContainer;
