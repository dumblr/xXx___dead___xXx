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
      imageFiles: ''
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

  handleFiles = async () => {
    // let filesArray = []
    let getFiles = document.getElementById('file').files;
    // for(let i = 0; i < getFiles.length; i++) {
    //   filesArray.push(getFiles[i])
    // }
    this.writeFile(getFiles);
    // return this.setFilesState(filesArray);
  };

  // setFilesState = (filesArray) => {
  //   this.setState({
  //     imageFiles: filesArray
  //   }, () => console.log('files', this.state.imageFiles))
  // };

  writeFile = async files => {
    const archive = await new global.DatArchive(DAT_URL);

    if (files) {
      let f = files[0];
      let reader = new FileReader();
      let imageId = await v4();
      reader.onload = () => {
        archive.writeFile(`/images/${imageId}.jpg`, reader.result);
      };
      reader.readAsDataURL(f);

      this.setState({
        imagePath: '/images/' + imageId + '.jpg'
      });
    }
  };

  writePost = async (titleContent, textContent) => {
    const newPostId = await v4();
    const archive = await new global.DatArchive(DAT_URL);

    const imageFiles = this.state.imagePath;

    // const imagesArray = ['/images/69.jpg', '/images/69.jpg']
    await archive.writeFile(
      `/posts/${newPostId}.json`,
      fileContents(
        titleContent,
        JSON.stringify(textContent),
        imageFiles,
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
          handleFiles={this.handleFiles}
        />
      </div>
    );
  }
}

export default ImagePost;
