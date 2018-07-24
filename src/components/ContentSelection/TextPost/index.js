import React from 'react';

import styles from './TextPost.modules.scss';

import Button from '../../SharedComponents/Button';

const archive = new global.DatArchive(
  `e03d0ae6a70caebf2f65408b77d5737ff18863568618594132ea7f76861852e7`
);

class TextPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleContent: '',
      textContent: '',
      whisperContent: ''
    };

    this.valueUpdater = this.valueUpdater.bind(this);
    this.createTextPost = this.createTextPost.bind(this);
    this.makeId = this.makeId.bind(this);
  }

  makeId() {
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

  async createTextPost() {
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

    await archive.writeFile('/mine/posts/' + id + '.json', outputJson);

    console.log('frogs', outputJson);
  }

  render() {
    return (
      <div className={styles.TextPost}>
        <form id="textformSubmit">
          <div
            className={`${styles.FormElement} ${
              this.state.titleContent !== '' ? styles.FormElementActive : ''
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
            className={`${styles.FormElement} ${styles.FormElementTextArea} ${
              this.state.textContent !== '' ? styles.FormElementActive : ''
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

          <div className={styles.FormElementCheckbox}>
            <input type="checkbox" id="whisperPost" />
            <label htmlFor="whisperPost">Keep this post to myself</label>
          </div>
        </form>
        <Button buttonClickFunction={this.createTextPost} />
      </div>
    );
  }
}

export default TextPost;
