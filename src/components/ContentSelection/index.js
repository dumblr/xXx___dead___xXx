import React from 'react';

import styles from './ContentSelection.modules.scss';

import ImagePost from './ImagePost';
import TextPost from './TextPost';

class ContentSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPostType: ''
    };

    this.togglePostType = this.togglePostType.bind(this);
  }

  componentDidMount() {}

  togglePostType(val) {
    this.setState({
      showPostType: val
    });
  }

  render() {
    return (
      <div
        className={`
				${styles.ContentSelection}
				${this.props.open ? styles.ContentSelection__Open : ''}
			`}
      >
        <div
          className={`
					${styles.ContentSelection__Wrapper}
					${this.state.showPostType !== '' ? styles.ContentSelection__ShowForm : ''}
				`}
        >
          <div
            className={`
						${styles.ContentSelection__Items}
						${this.state.showPostType !== '' ? styles.ContentSelection__Items_Slim : ''}
					`}
          >
            <div
              className={`
								${styles.ContentSelection__Item}
								${
                  this.state.showPostType === '' ||
                  this.state.showPostType === 'image'
                    ? ''
                    : styles.ContentSelection__Item_Hide
                }
							`}
              onClick={() => this.togglePostType('image')}
            >
              <img
                src="/images/icon-image.png"
                alt="Add Visual Content Selector"
              />
              <p>Image</p>
            </div>
            <div
              className={`
								${styles.ContentSelection__Item}
								${
                  this.state.showPostType === '' ||
                  this.state.showPostType === 'text'
                    ? ''
                    : styles.ContentSelection__Item_Hide
                }
							`}
              onClick={() => this.togglePostType('text')}
            >
              <img src="/images/icon-pencil.png" alt="Add Text Selector" />
              <p>Text</p>
            </div>
          </div>

          <div
            className={`
						${styles.ContentSelection__Display}
						${this.state.showPostType !== '' ? '' : styles.ContentSelection__Display_Hide}
					`}
          >
            {this.state.showPostType === 'image' && <ImagePost />}
            {this.state.showPostType === 'text' && <TextPost />}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentSelection;
