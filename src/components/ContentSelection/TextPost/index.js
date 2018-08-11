import React from 'react';
import { DAT_URL } from './../../../config';
import { v4 } from 'uuid';

import fileContents from './../../../utils/fileContents';
import TextForm from './TextForm';

class TextPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleContent: '',
      textContent: ''
      // whisperContent: ''
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
      fileContents(
        titleContent,
        JSON.stringify(textContent),
        '',
        newPostId,
        'text',
        'Post Author'
      )
    );
    //--- TODO Add Post Author above here...

    this.setState({
      titleContent: '',
      textContent: ''
    });

    this.props.getPosts(archive);
    this.props.toggleContentSelection();
  };

  render() {
    return (
      <div className={'TextPost'}>
        <TextForm
          changeFn={this.fieldChange}
          submitFn={this.formSubmit}
          titleContent={this.state.titleContent}
          textContent={this.state.textContent}
        />
      </div>
    );
  }
}

export default TextPost;
