import React from "react";
import styled from "styled-components";

const StyledGameStatus = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const GameStatus = ({ remainingSets, totalCardsLeft }) => {
  return (
    <StyledGameStatus>
      <li>
        <h3>Remaining possible sets: {remainingSets}</h3>
      </li>
      <li>
        <h3>Total cards left: {totalCardsLeft}</h3>
      </li>
    </StyledGameStatus>
  );
};

export default GameStatus;
