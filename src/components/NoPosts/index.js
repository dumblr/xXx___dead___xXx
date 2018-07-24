import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 40px;
  padding: 40px 20px;
`;

const Text = styled.h6`
  font-size: 14px;
  line-height: 16px;
  margin: 0;
`;

const NoPosts = () => (
  <Wrapper>
    <Text>gimme da posts, im hungry</Text>
  </Wrapper>
);

export default NoPosts;
