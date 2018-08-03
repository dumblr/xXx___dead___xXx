import React from 'react';

import ImagePost from './ImagePost';
import TextPost from './TextPost';

class ContentSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPostType: ''
    };
  }

  componentDidMount() {}

  togglePostType = (val) => {
    this.setState({
      showPostType: val
    });
  }

  render() {
    return (
      <div
        className={`
	  ${'ContentSelection'}
	  ${this.props.open ? 'ContentSelection__Open' : ''}
	`}>
        <div className={`
	  ${'ContentSelection__Wrapper'}
	  ${this.state.showPostType !== '' ? 'ContentSelection__ShowForm' : ''}
	`}>
          <div className={`
	    ${'ContentSelection__Items'}
	    ${this.state.showPostType !== '' ? 'ContentSelection__Items_Slim' : ''}
	  `}>
            <div className={`
	      ${'ContentSelection__Item'}
	      ${
		this.state.showPostType === '' ||
		this.state.showPostType === 'image'
		? ''
		: 'ContentSelection__Item_Hide'
              }`}
              onClick={() => this.togglePostType('image')}>
              <img
                src="/images/icon-image.png"
                alt="Add Visual Content Selector"
              />
              <p>Image</p>
            </div>
            <div
              className={`
		${'ContentSelection__Item'}
		${
                  this.state.showPostType === '' ||
                  this.state.showPostType === 'text'
                  ? ''
                  : 'ContentSelection__Item_Hide'
              }					`}
              onClick={() => this.togglePostType('text')}
            >
              <img src="/images/icon-pencil.png" alt="Add Text Selector" />
              <p>Text</p>
            </div>
          </div>

          <div
            className={`
	      ${'ContentSelection__Display'}
	      ${this.state.showPostType !== '' ? '' : 'ContentSelection__Display_Hide'}
	    `}>
            {this.state.showPostType === 'image' && <ImagePost />}
            {this.state.showPostType === 'text' && <TextPost />}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentSelection;
