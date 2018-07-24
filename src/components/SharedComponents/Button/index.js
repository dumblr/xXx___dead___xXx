import React from 'react';

import styles from './Button.modules.scss';

const Button = props => {
  if (props.buttonClickFunction) {
    return (
      <a className={styles.Button} onClick={() => props.buttonClickFunction()}>
        {props.buttonText ? props.buttonText : 'submit'}
      </a>
    );
  } else {
    return (
      <a className={styles.Button}>
        {props.buttonText ? props.buttonText : 'submit'}
      </a>
    );
  }
};

export default Button;
