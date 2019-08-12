import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBoardMessage = styled.p`
  font-size: 16px;
  font-weight: 700;
  position: relative;
  text-transform: capitalize;

  &.loading-msg {
    color: var(--dark-blue);
  }

  &.ready-msg {
    color: var(--set-green);
  }

  @media screen and (min-width: 480px) {
    right: 10px;
  }
`;

const BoardMessage = ({ loading }) => {
  const message = loading ? "loading new board..." : "board ready";
  return (
    <StyledBoardMessage className={loading ? "loading-msg" : "ready-msg"}>
      {message}
    </StyledBoardMessage>
  );
};

BoardMessage.defaultProps = {
  loading: false
};

BoardMessage.propTypes = {
  loading: PropTypes.bool
};

export default BoardMessage;
