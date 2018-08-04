import React from 'react';

// import Button from '../../SharedComponents/Button';

const TextForm = ({ changeFn, submitFn, titleContent, textContent }) => (
  <form onSubmit={e => submitFn(e)}>
    <div
      className={`${'FormElement'} ${
        titleContent !== '' ? 'FormElementActive' : ''
      }`}
    >
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={titleContent}
        onChange={e => changeFn(e, 'titleContent')}
      />
      <label htmlFor="title-entry">Title</label>
    </div>
    <div
      className={`${'FormElement'} ${'FormElementTextArea'} ${
        textContent !== '' ? 'FormElementActive' : ''
      }`}
    >
      <textarea
        value={textContent}
        placeholder="Content"
        onChange={e => changeFn(e, 'textContent')}
      />
      <label htmlFor="content-entry">Content</label>
    </div>
    <button className={'Button'} type="submit">
      Submit
    </button>
  </form>
);

export default TextForm;

// <form id="textformSubmit">
//           <div
//             className={`${'FormElement'} ${
//               this.state.titleContent !== '' ? 'FormElementActive' : ''
//             }`}>
//             <input
//               id="title-entry"
//               type="text"
//               name="title"
//               value={this.state.titleContent}
//               onChange={this.valueUpdater('titleContent')}
//             />
//             <label htmlFor="title-entry">Title</label>
//           </div>

//           <div
//             className={`${'FormElement'} ${'FormElementTextArea'} ${
//               this.state.textContent !== '' ? 'FormElementActive' : ''
//             }`}
//           >
//             <textarea
//               id="content-entry"
//               type="text"
//               name="title"
//               value={this.state.textContent}
//               onChange={this.valueUpdater('textContent')}
//               rows="6"
//             />
//             <label htmlFor="content-entry">Content</label>
//           </div>

//           {/* <div className={'FormElementCheckbox'}>
//             <input type="checkbox" id="whisperPost" />
//             <label htmlFor="whisperPost">Keep this post to myself</label>
//           </div> */}
//         </form>
//         <Button buttonClickFunction={this.createTextPost} />
