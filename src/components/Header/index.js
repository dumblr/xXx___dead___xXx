import React from 'react';

import styles from './Header.modules.scss';
import ContentSelection from '../ContentSelection';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentSelectionOpen: false
    };

    this.toggleContentSelection = this.toggleContentSelection.bind(this);
  }

  componentDidMount() {}

  toggleContentSelection() {
    this.setState({
      contentSelectionOpen: !this.state.contentSelectionOpen
    });
  }

  render() {
    return (
      <header className={styles.Header}>
        <div className={styles.Header__Nav}>
          <a
            className={`${styles.ContentToggle} ${
              this.state.contentSelectionOpen ? styles.ContentToggle_Open : ''
            }`}
            onClick={() => this.toggleContentSelection()}
          >
            <img src="/images/icon-plus.svg" alt="plus icon" />
          </a>
          <div className={styles.ContentDisplayToggle}>
            <a
              className={`
								${styles.ContentDisplayToggle__Item} 
								${
                  this.props.postDisplay === 'mine'
                    ? styles.ContentDisplayToggle__Item_Selected
                    : ''
                }
							`}
              onClick={() => this.props.togglePostDisplay('mine')}
            >
              <img src="/images/icon-smile.svg" alt="show my posts" />
            </a>
            <a
              className={`
								${styles.ContentDisplayToggle__Item} 
								${
                  this.props.postDisplay === 'theirs'
                    ? styles.ContentDisplayToggle__Item_Selected
                    : ''
                }
							`}
              onClick={() => this.props.togglePostDisplay('theirs')}
            >
              <img src="/images/icon-group.svg" alt="show their posts" />
            </a>
          </div>
        </div>

        <ContentSelection open={this.state.contentSelectionOpen} />
      </header>
    );
  }
}

export default Header;
