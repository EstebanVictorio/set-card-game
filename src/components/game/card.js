import PropTypes from "prop-types";
import styled from "styled-components";
import Tokens from "components/game/tokens";
import React, { useState, useEffect } from "react";
import { COLORS, NUMBERS, SHADES, SHAPES } from "utils/constants";

const StyledCard = styled.div`
  display: flex;
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid lightgray;
  cursor: ${({ color }) => (color !== null ? "pointer" : "initial")};

  &:hover {
    background-color: ${({ color }) =>
      color !== null ? "cyan" : "transparent"};
  }

  &.selected {
    background-color: ${({ color }) =>
      color !== null ? "skyblue" : "transparent"};
  }

  .token-container {
    margin: 0;
    padding: 0;
    width: 48px;
    height: 48px;
    display: flex;
  }

  .token {
    width: 100%;
    height: 100%;
  }

  .token path {
    fill: ${({ color }) => COLORS[color]};
  }
`;

const Card = ({
  index,
  color,
  shade,
  shape,
  number,
  cardSet,
  setCardSet,
  setIsCardSetValid
}) => {
  const [selected, setSelected] = useState(false);

  const cardChangeEffect = () => {
    setCardSet([]);
    setSelected(false);
    setIsCardSetValid(false);
  };

  const selectedEffect = () => {
    if (selected) {
      setCardSet(cardSet.concat([{ color, shade, shape, number, index }]));
    } else {
      setCardSet(
        cardSet.reduce((prev, card) => {
          if (
            card.color === color &&
            card.shade === shade &&
            card.shape === shape &&
            card.number === number
          ) {
            return prev.concat([]);
          }
          return prev.concat([card]);
        }, [])
      );
    }
  };

  const handleSetSelectedClick = () => {
    if (color !== null && shade !== null && shape !== null && number !== null) {
      setSelected(!selected && cardSet.length < 3);
    }
  };

  useEffect(selectedEffect, [selected]);
  useEffect(cardChangeEffect, [color, shade, shape, number]);

  return (
    <StyledCard
      color={color}
      onClick={handleSetSelectedClick}
      className={selected ? "selected" : ""}
    >
      <figure className="token-container">
        <Tokens
          color={COLORS[color]}
          shade={SHADES[shade]}
          shape={SHAPES[shape]}
          number={NUMBERS[number]}
        />
      </figure>
    </StyledCard>
  );
};

Card.defaultProps = {
  color: null,
  shade: null,
  shape: null,
  number: null
};

Card.propTypes = {
  color: PropTypes.number,
  shade: PropTypes.number,
  shape: PropTypes.number,
  number: PropTypes.number
};

export default Card;
