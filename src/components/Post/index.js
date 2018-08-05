import React from 'react';
import ContentItem from '../../components/ContentView/ContentItem';

const Post = ({ post }) => {
  return (
    <div className={`Post`}>
      <ContentItem vals={post} />
    </div>
  );
};

export default Post;
