import React from 'react';
import ContentSelection from '../ContentSelection';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentSelectionOpen: false
    };
  }

  componentDidMount() {}

  toggleContentSelection = () => {
    this.setState({
      contentSelectionOpen: !this.state.contentSelectionOpen
    });
  };

  render() {
    return (
      <header className={`Header`}>
        <div className={`Header__Nav`}>
          <a
            className={`${'ContentToggle'} ${
              this.state.contentSelectionOpen ? 'ContentToggle_Open' : ''
            }`}
            onClick={() => this.toggleContentSelection()}
          >
            <img src="/images/icon-plus.svg" alt="plus icon" />
          </a>
          <div className={'ContentDisplayToggle'}>
            <a
              className={`
								${'ContentDisplayToggle__Item'} 
								${
                  this.props.postDisplay === 'mine'
                    ? 'ContentDisplayToggle__Item_Selected'
                    : ''
                }
							`}
              onClick={() => this.props.togglePostDisplay('mine')}
            >
              <img src="/images/icon-smile.svg" alt="show my posts" />
            </a>
            <a
              className={`
								${'ContentDisplayToggle__Item'} 
								${
                  this.props.postDisplay === 'theirs'
                    ? 'ContentDisplayToggle__Item_Selected'
                    : ''
                }
							`}
              onClick={() => this.props.togglePostDisplay('theirs')}
            >
              <img src="/images/icon-group.svg" alt="show their posts" />
            </a>
          </div>
        </div>
        <ContentSelection
          getPosts={this.props.getPosts}
          open={this.state.contentSelectionOpen}
          toggleContentSelection={this.toggleContentSelection}
        />
      </header>
    );
  }
}

export default Header;
