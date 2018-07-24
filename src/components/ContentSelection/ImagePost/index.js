import React from 'react';

import styles from './ImagePost.modules.scss';
import Button from '../../SharedComponents/Button';

class ImagePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleImage: '',
      descriptionImage: '',
      whisperImage: ''
    };

    this.valueUpdater = this.valueUpdater.bind(this);
  }

  valueUpdater = field => event => {
    let value = event.target.value;

    const newState = {
      ...this.state,
      [field]: value
    };

    this.setState(newState);
  };

  render() {
    return (
      <div className={styles.ImagePost}>
        <form encType="multipart/form-data">
          <div
            className={`${styles.FormElement} ${
              this.state.titleImage !== '' ? styles.FormElementActive : ''
            }`}
          >
            <input
              id="title-entry"
              type="text"
              name="title"
              value={this.state.titleImage}
              onChange={this.valueUpdater('titleImage')}
            />
            <label htmlFor="title-entry">Title</label>
          </div>

          <div className={styles.Box}>
            <input
              className={styles.Box__File}
              type="file"
              name="files[]"
              id="file"
              data-multiple-caption="{count} files selected"
              multiple
            />
            <label htmlFor="file">
              Choose a file
              <span className={styles.Box__Dragndrop}> or drag it here</span>
            </label>
          </div>

          <div
            className={`${styles.FormElement} ${
              this.state.descriptionImage !== '' ? styles.FormElementActive : ''
            }`}
          >
            <input
              id="description-entry"
              type="text"
              name="title"
              value={this.state.descriptionImage}
              onChange={this.valueUpdater('descriptionImage')}
            />
            <label htmlFor="description-entry">Image Description</label>
          </div>

          <div className={styles.FormElementCheckbox}>
            <input type="checkbox" id="whisperImage" />
            <label htmlFor="whisperImage">Keep this post to myself</label>
          </div>

          <Button buttonText={'Upload Image'} />
        </form>
      </div>
    );
  }
}

export default ImagePost;
