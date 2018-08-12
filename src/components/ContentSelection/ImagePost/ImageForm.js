import React from 'react';

const ImageForm = ({ changeFn, submitFn, titleContent, textContent }) => (
  <form onSubmit={e => submitFn(e)}>
    <div
      className={`${'FormElement'} ${
        titleContent !== '' ? 'FormElementActive' : ''
      }`}
    >
      <input
        type="text"
        name="title"
        value={titleContent}
        onChange={e => changeFn(e, 'titleContent')}
      />
      <label htmlFor="title-entry">Title</label>
    </div>
    <div className={'Box'}>
      <input
        className={'Box__File'}
        type="file"
        name="files[]"
        id="file"
        data-multiple-caption="{count} files selected"
        multiple
      />
      <label htmlFor="file">
        Choose a file
        <span className={'Box__Dragndrop'}> or drag it here</span>
      </label>
    </div>
    <div
      className={`${'FormElement'} ${'FormElementTextArea'} ${
        textContent !== '' ? 'FormElementActive' : ''
      }`}
    >
      <textarea
        value={textContent}
        rows="2"
        onChange={e => changeFn(e, 'textContent')}
      />
      <label htmlFor="content-entry">Content</label>
    </div>
    <button className={'Button'} type="submit">
      Submit
    </button>
  </form>
);

export default ImageForm;
