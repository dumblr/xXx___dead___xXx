import React from 'react';

const ProfileEdit = ({
  userAvatar,
  userName,
  userBio,
  changeFn,
  updateUserData
}) => (
  <div className="Profile__Edit">
    <form onSubmit={e => updateUserData(e)}>
      <div
        className={`${'FormElement'} ${
          userName !== '' ? 'FormElementActive' : ''
        }`}
      >
        <input
          type="text"
          name="title"
          value={userName}
          onChange={e => changeFn(e, 'name')}
        />
        <label htmlFor="title-entry">Name</label>
      </div>
      <div
        className={`${'FormElement'} ${
          userBio !== '' ? 'FormElementActive' : ''
        }`}
      >
        <input
          type="text"
          name="title"
          value={userBio}
          onChange={e => changeFn(e, 'bio')}
        />
        <label htmlFor="title-entry">Bio</label>
      </div>
      <button className={'Button'} type="submit">
        Save Profile
      </button>
    </form>
  </div>
);

export default ProfileEdit;
