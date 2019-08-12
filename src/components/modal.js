import styled from "styled-components";
import React, { useState, useEffect } from "react";

const StyledOverlay = styled.div`
  width: 100%;
  z-index: 4;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: calc(100vh - var(--nav-height));
  background-color: rgba(164, 164, 164, 0.5);

  &.show {
    display: flex;
  }

  &.hidden {
    display: none;
  }
`;

const StyledModal = styled.div`
  display: flex;
  padding: 24px 50px;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  box-shadow: 4px 5px 12px 0px gray;

  .modal-title {
    font-size: 36px;
    text-align: center;
    text-transform: capitalize;
  }

  .modal-body {
    flex-grow: 1;
    font-size: 16px;
  }

  .actions {
    display: flex;
    justify-content: center;
  }

  .action {
    text-transform: capitalize;
  }

  .hidden-action {
    display: none;
  }
`;

const Modal = ({
  modalOpen,
  shuffleModal,
  handlePlayAgainClick,
  handleDealNewBoardClick
}) => {
  const [classNames, setClassNames] = useState("hidden");
  const [shuffleActionClassNames, setShuffleActionClassNames] = useState("");
  const [playAgainActionClassNames, setPlayAgainActionClassNames] = useState(
    ""
  );

  useEffect(() => {
    setClassNames(modalOpen ? "show" : "hidden");
  }, [modalOpen]);

  useEffect(() => {
    if (shuffleModal) {
      setShuffleActionClassNames("primary action");
      setPlayAgainActionClassNames("hidden-action");
    } else {
      setShuffleActionClassNames("hidden-action");
      setPlayAgainActionClassNames("primary action");
    }
  }, [shuffleModal]);

  return (
    <StyledOverlay className={classNames}>
      <StyledModal>
        <h2 className="modal-title">
          {shuffleModal ? "no sets available!" : "you win!"}
        </h2>
        <p className="modal-body">
          {shuffleModal
            ? "There are no sets available in the current board."
            : `You found all the sets in ${234} seconds.`}
        </p>
        <div className="actions">
          <input
            type="button"
            value="shuffle cards"
            onClick={handleDealNewBoardClick}
            className={shuffleActionClassNames}
          />
          <input
            type="button"
            value="play again"
            onClick={handlePlayAgainClick}
            className={playAgainActionClassNames}
          />
        </div>
      </StyledModal>
    </StyledOverlay>
  );
};

export default Modal;
