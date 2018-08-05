import React from 'react';
import ContentItem from '../../components/ContentView/ContentItem';

const Post = ({ data }) => {
  return (
    <div className={`Post`}>
      <ContentItem vals={data} />
    </div>
  );
};

export default Post;
