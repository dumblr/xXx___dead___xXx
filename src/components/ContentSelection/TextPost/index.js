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
  // createTextPost = () => {
  //   let title = this.state.titleContent;
  //   let slug = title
  //     .toLowerCase()
  //     .replace(/ /g, '-')
  //     .replace(/[^\w-]+/g, '');
  //   let text = this.state.textContent;
  //   let id = this.makeId();
  //   let date = new Date().toString();
  //   let outputJson = {
  //     id: '3456789123456789',
  //     date: date,
  //     type: 'text',
  //     title: title,
  //     slug: slug,
  //     author: 'frogs',
  //     author_address: '#',
  //     author_avatar: '😈',
  //     asset_ref: false,
  //     asset_description: false,
  //     text_data: [
  //       {
  //         html_tag: 'p',
  //         content: text
  //       }
  //     ]
  //   };

  // await archive.writeFile('/mine/posts/' + id + '.json', outputJson);
  // }

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
      fileContents(titleContent, textContent, newPostId, 'text')
    );

    this.setState({
      titleContent: '',
      textContent: ''
    });

    this.props.getPosts(archive);
    this.props.toggleContentSelection();
  };

  // deleteLink = async postId => {
  //   const archive = await new global.DatArchive(DAT_URL);
  //   await archive.unlink(`/posts/${postId}.json`);
  //   this.props.getPosts(archive);
  // };

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
