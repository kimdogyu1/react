import React from 'react';
import styled from 'styled-components';
import CardShuffler from '../cardshuffler';
import Board from '../board';

function Main() {
  return (
    <MainContainer>
      <>
        <CardShuffler />
        <Board />
      </>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;
