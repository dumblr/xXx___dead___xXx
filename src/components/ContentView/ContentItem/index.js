import React from 'react';
import { Link } from 'react-router-dom';

import TextPost from './TextPost';
import ImagePost from './ImagePost';

const ContentItem = props => {
  let DateItem = new Date(props.vals.date);
  let Minutes = (DateItem.getMinutes() < 10 ? '0' : '') + DateItem.getMinutes();
  let Time = DateItem.getHours() + `:` + Minutes;
  let Month = DateItem.getMonth();
  let Day = DateItem.getDate();
  let MonthWord;

  switch (true) {
    case Month === 0:
      MonthWord = 'January';
      break;
    case Month === 1:
      MonthWord = 'February';
      break;
    case Month === 2:
      MonthWord = 'March';
      break;
    case Month === 3:
      MonthWord = 'April';
      break;
    case Month === 4:
      MonthWord = 'May';
      break;
    case Month === 5:
      MonthWord = 'June';
      break;
    case Month === 6:
      MonthWord = 'July';
      break;
    case Month === 7:
      MonthWord = 'August';
      break;
    case Month === 8:
      MonthWord = 'September';
      break;
    case Month === 9:
      MonthWord = 'October';
      break;
    case Month === 10:
      MonthWord = 'November';
      break;
    case Month === 11:
      MonthWord = 'December';
      break;
    default:
      MonthWord = '';
  }

  return (
    <div className={'ContentItem'}>
      <div className={'ContentItem__Date'}>
        <p>
          {MonthWord}
          <br />
          {Day}
        </p>
      </div>
      <div className={'ContentItem__View'}>
        <h2>
          {props.vals.author_avatar} {props.vals.author} @ {Time}
        </h2>
        <h3>
          <Link to={'/post/' + props.vals.id}>{props.vals.title}</Link>
        </h3>
        {props.vals.type === 'text' && (
          <TextPost text_data={props.vals.text_data} />
        )}
        {props.vals.type === 'image' && (
          <ImagePost
            source={props.vals.asset_ref}
            altText={props.vals.asset_description}
          />
        )}
      </div>
    </div>
  );
};

export default ContentItem;
