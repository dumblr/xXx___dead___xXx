import React from 'react';
import {
  ListWrapper,
  EachListItem,
  LinkTitle,
  LinkDescription,
  LinkTag,
  LinkDelete
} from './styles';

const LinkList = ({ links, isOwner, deleteFn }) => (
  <ListWrapper>
    {links.map((link, i) => (
      <EachListItem key={i}>
        <LinkTitle>
          <LinkTag href={link.titleContent}>{link.titleContent}</LinkTag>
        </LinkTitle>
        <LinkDescription>{link.textContent}</LinkDescription>
        {isOwner && (
          <LinkDelete onClick={() => deleteFn(link.postId)}>Delete</LinkDelete>
        )}
      </EachListItem>
    ))}
  </ListWrapper>
);

export default LinkList;
