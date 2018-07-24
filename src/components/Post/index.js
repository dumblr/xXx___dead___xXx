import React from 'react';

import ContentItem from '../../components/ContentView/ContentItem';
import styles from './Post.modules.scss';

const Post = ({ data }) => {
  return (
    <div className={styles.Post}>
      <ContentItem vals={data} />
    </div>
  );
};

export default Post;
