import React from 'react';

const ImagePost = props => {
  return (
    <div className={'ImagePost'}>
      <img src={'/files/mine/assets/' + props.source} alt={props.altText} />
    </div>
  );
};

export default ImagePost;
