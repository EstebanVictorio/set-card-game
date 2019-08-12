import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBoard = styled.div`
  display: grid;
  padding: 20px;
  margin: 10px 0;
  grid-row-gap: 5px;
  border-radius: 5px;
  position: relative;
  grid-column-gap: 5px;
  grid-auto-flow: column;
  border: 1px solid lightgray;
  width: var(--container-width);
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
`;

const StyledLoadingOverlay = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
  background-color: lightgray;
  &.loading-overlay {
    display: initial;
  }

  &.hidden-overlay {
    display: none;
  }
`;

const Board = ({ children, loading }) => {
  return (
    <StyledBoard>
      <StyledLoadingOverlay
        className={loading ? "loading-overlay" : "hidden-overlay"}
      />
      {children}
    </StyledBoard>
  );
};

Board.defaultProps = {
  loading: false
};

Board.propTypes = {
  loading: PropTypes.bool
};

export default Board;
