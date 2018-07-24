import React from 'react';

import Header from '../../components/Header';
import ContentView from '../../components/ContentView';

class ContentViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postDisplay: 'mine'
    };

    this.togglePostDisplay = this.togglePostDisplay.bind(this);
  }

  togglePostDisplay(val) {
    this.setState({
      postDisplay: val
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          postDisplay={this.state.postDisplay}
          togglePostDisplay={this.togglePostDisplay}
        />
        <ContentView postDisplay={this.state.postDisplay} />
      </div>
    );
  }
}

export default ContentViewContainer;
