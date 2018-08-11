import React from 'react';
import { DAT_URL } from './../../../config';
import { v4 } from 'uuid';

import fileContents from './../../../utils/fileContents';

import Button from '../../SharedComponents/Button';

class ImagePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleContent: '',
      textContent: '', // Image Description
      imagePath: ''
    };
  }

  async componentDidMount() {}

  fieldChange = (e, str) => {
    this.setState({
      [str]: e.target.value
    });
  };

  formSubmit = e => {
    e.preventDefault();
    this.writePost(this.state.titleContent, this.state.textContent);
  };

  writePost = async (titleContent, textContent) => {
    const newPostId = await v4();
    const archive = await new global.DatArchive(DAT_URL);
    await archive.writeFile(
      `/posts/${newPostId}.json`,
      fileContents(titleContent, JSON.stringify(textContent), newPostId, 'text')
    );

    this.setState({
      titleContent: '',
      textContent: ''
    });

    this.props.getPosts(archive);
    this.props.toggleContentSelection();
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
              value={this.state.titleContent}
              onChange={e => this.fieldChange(e, 'titleContent')}
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
              onChange={e => this.fieldChange(e, 'textContent')}
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
