import React from 'react';

import Header from '../../components/Header';
import Follows from '../../components/Following/Follows';
import FollowSuggestions from '../../components/Following/FollowSuggestions';
import NewFollow from '../../components/Following/NewFollow';
import Profile from '../../components/SharedComponents/Profile';

class Settings extends React.Component {
  render() {
    return (
      <div className="Settings">
        <Header
          contentSelectionOpen={this.props.contentSelectionOpen}
          toggleContentSelection={this.props.toggleContentSelection}
          togglePostDisplay={this.props.togglePostDisplayFn}
          getPosts={this.props.getPosts}
          postDisplay={'settings'}
          hideMineToggle={true}
        />
        <div className="Settings__Container">
          <h2>Settings</h2>
          <Follows />
          <FollowSuggestions />
          <NewFollow />
          <Profile />
        </div>
      </div>
    );
  }
}

export default Settings;
