import React from 'react';
import urlEnv from '../../utils/urlEnv';

import Header from '../../components/Header';
import Follows from '../../components/Following/Follows';
// import FollowSuggestions from '../../components/Following/FollowSuggestions';
import NewFollow from '../../components/Following/NewFollow';
import Profile from '../../components/SharedComponents/Profile';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        avatar: '',
        bio: '',
        name: '',
        follows: []
      }
    };
  }

  async componentDidMount() {
    try {
      const archive = await new global.DatArchive(urlEnv());
      this.getUserInfo(archive);
    } catch (error) {
      console.log(error);
    }
  }

  userDataChange = (e, str) => {
    this.setState({
      userData: {
        ...this.state.userData,
        [str]: e.target.value
      }
    });
  };

  getUserInfo = async archive => {
    const userData = await archive.readFile(`profile.json`);
    this.setState({
      userData: JSON.parse(userData)
    });
  };

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
          <div className="Settings__Item">
            <div className="Settings__Title">
              <h2>Profile Settings</h2>
              <div
                className="Edit__Toggle"
                onClick={() => this.props.toggleEdit()}
              >
                <img src="/icons/icon-pencil.png" alt="pencil for edit" />
              </div>
            </div>
            <Profile
              userAvatar={this.state.userData.avatar}
              userName={this.state.userData.name}
              userBio={this.state.userData.bio}
              editProfile={this.props.editProfile}
              changeFn={this.userDataChange}
              updateUserData={this.props.updateUserData}
            />
          </div>
          <div className="Settings__Item">
            <h2>Following</h2>
            <NewFollow addFollower={this.props.addFollower} />
            <Follows />
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
