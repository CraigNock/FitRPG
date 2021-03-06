import React from 'react';
import styled from 'styled-components';
import Global from '../../GlobalStyles';

import Profile from '../Profile';

const App = () => {
  return (
    <Wrapper>
      <Global />
      <Profile/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vw;
  width: 100vw;
`;


export default App;
