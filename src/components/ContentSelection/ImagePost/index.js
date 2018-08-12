import React from 'react';
import { DAT_URL } from './../../../config';
import { v4 } from 'uuid';

import fileContents from './../../../utils/fileContents';
import ImageForm from './ImageForm';

class ImagePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleContent: '',
      textContent: '',
      imagePath: '/images/69.jpg'
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
    this.writePost(
      this.state.titleContent,
      this.state.textContent,
      this.state.imagePath
    );
  };

  writePost = async (titleContent, textContent, imagePath) => {
    const newPostId = await v4();
    const archive = await new global.DatArchive(DAT_URL);
    await archive.writeFile(
      `/posts/${newPostId}.json`,
      fileContents(
        titleContent,
        JSON.stringify(textContent),
        imagePath,
        newPostId,
        'image',
        'Post Author'
      )
    );

    this.setState({
      titleContent: '',
      textContent: '',
      imagePath: ''
    });

    this.props.getPosts(archive);
    this.props.toggleContentSelection();
  };

  render() {
    return (
      <div className={'ImagePost'}>
        <ImageForm
          changeFn={this.fieldChange}
          submitFn={this.formSubmit}
          titleContent={this.state.titleContent}
          textContent={this.state.textContent}
          imagePath={this.state.imagePath}
        />
      </div>
    );
  }
}

export default ImagePost;
