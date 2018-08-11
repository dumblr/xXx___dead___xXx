import React from 'react';
import ContentItem from '../../components/ContentView/ContentItem';

const Post = ({ post, deletePost, isOwner }) => {
  return (
    <div className={`Post`}>
      <ContentItem deletePost={deletePost} isOwner={isOwner} vals={post} />
    </div>
  );
};

export default Post;
