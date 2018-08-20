import React from 'react';

const NewFollow = ({ addFollower }) => (
  <div className="">
    <h3>Add User</h3>
    <form onSubmit={e => addFollower(e)}>
      <input type="text" placeholder="Dat URL" id="add-follower-input" />
      <input type="submit" />
    </form>
  </div>
);

export default NewFollow;
