import React from "react";
import styled from "styled-components";

const StyledRules = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .welcome-heading {
    font-size: 24px;
    font-weight: 500;
    margin: 0 0 24px 0;
  }

  .rule,
  .game-conditions-heading {
    font-size: 14px;
    font-weight: 400;
    margin: 0 0 24px 0;
  }
`;

const Rules = () => (
  <StyledRules>
    <h1 className="welcome-heading">Welcome!</h1>
    <p className="game-objective">Find all the sets.</p>
    <p className="game-conditions-heading">
      A set is a group of 3 cards that satisfies all the following conditions:
    </p>
    <ul className="rules">
      <li className="rule">
        They all have the same symbol or have three different symbols.
      </li>
      <li className="rule">
        They all have the same number of symbols or have three different numbers
        of symbols.
      </li>
      <li className="rule">
        They all have the same shading or have three different shadings.
      </li>
      <li className="rule">
        They all have the same color or have three different colors.
      </li>
    </ul>
  </StyledRules>
);

export default Rules;
