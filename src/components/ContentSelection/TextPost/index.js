import React from 'react';

import Button from '../../SharedComponents/Button';

class TextPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleContent: '',
      textContent: ''
      // whisperContent: ''
    };
  }

  makeId = () => {
    var id = '';
    var vals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 16; i++) {
      id += vals.charAt(Math.floor(Math.random() * vals.length));
    }
    return id;
  }

  valueUpdater = field => event => {
    let value = event.target.value;

    const newState = {
      ...this.state,
      [field]: value
    };

    this.setState(newState);
  };

  async createTextPost = () => {
    let title = this.state.titleContent;
    let slug = title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
    let text = this.state.textContent;
    let id = this.makeId();
    let date = new Date().toString();
    let outputJson = {
      id: '3456789123456789',
      date: date,
      type: 'text',
      title: title,
      slug: slug,
      author: 'frogs',
      author_address: '#',
      author_avatar: '😈',
      asset_ref: false,
      asset_description: false,
      text_data: [
        {
          html_tag: 'p',
          content: text
        }
      ]
    };

    // await archive.writeFile('/mine/posts/' + id + '.json', outputJson);
  }

  render() {
    return (
      <div className={'TextPost'}>
        <form id="textformSubmit">
          <div
            className={`${'FormElement'} ${
              this.state.titleContent !== '' ? 'FormElementActive' : ''
            }`}
          >
            <input
              id="title-entry"
              type="text"
              name="title"
              value={this.state.titleContent}
              onChange={this.valueUpdater('titleContent')}
            />
            <label htmlFor="title-entry">Title</label>
          </div>

          <div
            className={`${'FormElement'} ${'FormElementTextArea'} ${
              this.state.textContent !== '' ? 'FormElementActive' : ''
            }`}
          >
            <textarea
              id="content-entry"
              type="text"
              name="title"
              value={this.state.textContent}
              onChange={this.valueUpdater('textContent')}
              rows="6"
            />
            <label htmlFor="content-entry">Content</label>
          </div>

          {/* <div className={'FormElementCheckbox'}>
            <input type="checkbox" id="whisperPost" />
            <label htmlFor="whisperPost">Keep this post to myself</label>
          </div> */}
        </form>
        <Button buttonClickFunction={this.createTextPost} />
      </div>
    );
  }
}

export default TextPost;
