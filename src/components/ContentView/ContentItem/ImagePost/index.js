import React from 'react';

import styles from './ImagePost.modules.scss';

const ImagePost = props => {
  return (
    <div className={styles.ImagePost}>
      <img src={'/files/mine/assets/' + props.source} alt={props.altText} />
    </div>
  );
};

export default ImagePost;
