import React from 'react';
import ContentSelection from '../ContentSelection';

const Header = ({
  getPosts,
  contentSelectionOpen,
  postDisplay,
  togglePostDisplay,
  toggleContentSelection,
  hideMineToggle
}) => (
  <header className={`Header`}>
    <div className={`Header__Nav`}>
      <a
        className={`${'ContentToggle'} ${
          contentSelectionOpen ? 'ContentToggle_Open' : ''
        }`}
        onClick={() => toggleContentSelection()}
      >
        <img src="/images/icon-plus.svg" alt="plus icon" />
      </a>
      <div
        className={`ContentDisplayToggle ${
          hideMineToggle ? 'ContentDisplayToggle--Hide' : ''
        }`}
      >
        <a
          className={`
          ${'ContentDisplayToggle__Item'} 
          ${postDisplay === 'mine' ? 'ContentDisplayToggle__Item_Selected' : ''}
        `}
          onClick={() => togglePostDisplay('mine')}
        >
          <img src="/images/icon-smile.svg" alt="show my posts" />
        </a>
        <a
          className={`
          ${'ContentDisplayToggle__Item'} 
          ${
            postDisplay === 'theirs'
              ? 'ContentDisplayToggle__Item_Selected'
              : ''
          }
        `}
          onClick={() => togglePostDisplay('theirs')}
        >
          <img src="/images/icon-group.svg" alt="show their posts" />
        </a>
      </div>
      <a
        href="/"
        className={`HomeArrow ${!hideMineToggle ? 'HomeArrow--Hide' : ''}`}
      >
        <img src="/images/icon-arrow.svg" alt="return home arrow" />
      </a>
    </div>

    <ContentSelection
      getPosts={getPosts}
      open={contentSelectionOpen}
      toggleContentSelection={toggleContentSelection}
    />
  </header>
);

export default Header;
