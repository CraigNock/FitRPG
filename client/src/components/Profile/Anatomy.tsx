import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface props {

};
const Anatomy : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper>
      Anatomy
    </Wrapper>
  )
}

export default Anatomy;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    'head'
    'shoulders'
    'knees'
    'toes';
  /* grid-template-rows: 1fr 6fr 0.3fr;
  grid-template-columns: 1.2fr 6fr 2fr; */
`;