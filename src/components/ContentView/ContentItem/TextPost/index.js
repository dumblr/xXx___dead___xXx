import React from 'react';

const TextPost = ({ textContent }) => {
  return (
    <div className={'TextPost'}>
      <p>{textContent}</p>
      {/* {props.textData.length > 0 &&
        props.textData.map((item, i) => (
          <div key={i}>
            {item.html_tag === 'p' && <p>{item.content}</p>}
            {item.html_tag === 'h1' && <h1>{item.content}</h1>}
            {item.html_tag === 'h2' && <h2>{item.content}</h2>}
            {item.html_tag === 'h3' && <h3>{item.content}</h3>}
            {item.html_tag === 'h4' && <h4>{item.content}</h4>}
          </div>
        ))} */}
    </div>
  );
};

export default TextPost;
