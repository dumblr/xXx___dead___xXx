import React from 'react';
import {
  ListWrapper,
  EachListItem,
  LinkTitle,
  LinkDescription,
  LinkTag
} from './styles';

const LinkList = ({ links }) => (
  <ListWrapper>
    {links.map((link, i) => (
      <EachListItem key={i}>
        <LinkTitle>
          <LinkTag href={link.titleContent}>{link.titleContent}</LinkTag>
        </LinkTitle>
        <LinkDescription>{link.textContent}</LinkDescription>
      </EachListItem>
    ))}
  </ListWrapper>
);

export default LinkList;
