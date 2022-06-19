import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Layout = ({ children, isLoggedIn }) => {
  return (
    <>
      {isLoggedIn && <Navigation />}
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  width: 100vw;
  background: #fafafa;
`;
