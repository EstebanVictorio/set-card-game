import React from "react";
import PropTypes from "prop-types";
import Card from "components/game/card";

const CardList = ({ list, cardSet, setCardSet, setIsCardSetValid }) => {
  return list.map((card, index) => {
    return (
      <Card
        {...card}
        list={list}
        index={index}
        cardSet={cardSet}
        key={`card-${index}`}
        setCardSet={setCardSet}
        setIsCardSetValid={setIsCardSetValid}
      />
    );
  });
};

CardList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.instanceOf(Object)]))
};

export default CardList;
