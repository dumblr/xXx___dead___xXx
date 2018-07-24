import styled from 'styled-components';

export const ListWrapper = styled.div`
  padding: 20px;
`;

export const EachListItem = styled.div`
  padding-left: 10px;
  border-left: 1px solid black;
  margin-bottom: 20px;
`;

export const LinkTitle = styled.h1`
  font-size: 22px;
  line-height: 26px;
  margin: 0 0 17px;
`;

export const LinkTag = styled.a`
  text-decoration: none;
  border-bottom: 2px dotted #1bbac6;
  /* who does this anymore lol */
  transition: all 3s ease;
  color: #000;
  text-decoration: none;

  &:hover {
    border-bottom: 2px dotted #d99852;
  }
`;

export const LinkDescription = styled.p`
  font-size: 13px;
  line-height: 15px;
  margin: 0 0 10px;
`;

export const LinkDelete = styled.button`
  cursor: pointer;
  border: 1px solid black;
  background: radial-gradient(ellipse at top, #1bbac6, transparent),
    radial-gradient(ellipse at bottom, #d99852, transparent);
`;
