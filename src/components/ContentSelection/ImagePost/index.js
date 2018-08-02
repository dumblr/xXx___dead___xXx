import React from 'react';

import Button from '../../SharedComponents/Button';

class ImagePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleImage: '',
      descriptionImage: ''
      // whisperImage: ''
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
      <div className={'ImagePost'}>
        <form encType="multipart/form-data">
          <div
            className={`${'FormElement'} ${
              this.state.titleImage !== '' ? 'FormElementActive' : ''
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

          <div className={'Box'}>
            <input
              className={'Box__File'}
              type="file"
              name="files[]"
              id="file"
              data-multiple-caption="{count} files selected"
              multiple
            />
            <label htmlFor="file">
              Choose a file
              <span className={'Box__Dragndrop'}> or drag it here</span>
            </label>
          </div>

          <div
            className={`${'FormElement'} ${
              this.state.descriptionImage !== '' ? 'FormElementActive' : ''
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

          {/* <div className={'FormElementCheckbox'}>
            <input type="checkbox" id="whisperImage" />
            <label htmlFor="whisperImage">Keep this post to myself</label>
          </div> */}

          <Button buttonText={'Upload Image'} />
        </form>
      </div>
    );
  }
}

export default ImagePost;
