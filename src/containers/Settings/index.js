import React from 'react';
import urlEnv from '../../utils/urlEnv';

import Header from '../../components/Header';
import Follows from '../../components/Following/Follows';
// import FollowSuggestions from '../../components/Following/FollowSuggestions';
import NewFollow from '../../components/Following/NewFollow';
import Profile from '../../components/SharedComponents/Profile';

const Settings = props => (
  <div className="Settings">
    <Header
      contentSelectionOpen={props.contentSelectionOpen}
      toggleContentSelection={props.toggleContentSelection}
      togglePostDisplay={props.togglePostDisplayFn}
      getPosts={props.getPosts}
      postDisplay={'settings'}
      hideMineToggle={true}
    />
    <div className="Settings__Container">
      <div className="Settings__Item">
        <div className="Settings__Title">
          <h2>Profile Settings</h2>
          <div className="Edit__Toggle" onClick={() => props.toggleEdit()}>
            <img src="/icons/icon-pencil.png" alt="pencil for edit" />
          </div>
        </div>
        <Profile
          userAvatar={props.userData.avatar}
          userName={props.userData.name}
          userBio={props.userData.bio}
          editProfile={props.editProfile}
          changeFn={props.userDataChange}
          updateUserData={props.updateUserData}
        />
      </div>
      <div className="Settings__Item">
        <h2>Following</h2>
        <NewFollow addFollower={props.addFollower} />
        <Follows follows={props.userData.follows} />
      </div>
    </div>
  </div>
);

export default Settings;
