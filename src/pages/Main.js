import React from 'react';
import styled from 'styled-components';
import CardShuffler from '../cardshuffler';

function Main() {
  return (
    <MainContainer>
      <>
        <CardShuffler />
      </>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;
