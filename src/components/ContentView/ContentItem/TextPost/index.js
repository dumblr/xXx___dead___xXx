import React from 'react';

import styles from './TextPost.modules.scss';

const TextPost = props => {
  return (
    <div className={styles.TextPost}>
      {props.text_data.length > 0 &&
        props.text_data.map((item, i) => (
          <div key={i}>
            {item.html_tag === 'p' && <p>{item.content}</p>}
            {item.html_tag === 'h1' && <h1>{item.content}</h1>}
            {item.html_tag === 'h2' && <h2>{item.content}</h2>}
            {item.html_tag === 'h3' && <h3>{item.content}</h3>}
            {item.html_tag === 'h4' && <h4>{item.content}</h4>}
          </div>
        ))}
    </div>
  );
};

export default TextPost;
