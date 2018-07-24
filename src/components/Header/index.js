import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 10px;
  line-height: 12px;
  margin: 0;
`;

const Header = () => (
  <Wrapper>
    <Title>
      linkstream is a place to save links during meetups, working sessions, or
      talks. Built on dat.
    </Title>
  </Wrapper>
);

export default Header;
