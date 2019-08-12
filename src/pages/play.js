import NProgress from "nprogress";
import Page from "components/page";
import Modal from "components/modal";
import Board from "components/game/board";
import { BLANK_CARD } from "utils/constants";
import CardList from "components/game/card-list";
import Notification from "components/notification";
import React, { useState, useEffect } from "react";
import GameStatus from "components/game/game-status";
import BoardMessage from "components/game/board-message";
import {
  isSet,
  getDeck,
  shuffleDeck,
  dealNewBoard,
  createDeckCards,
  getRemainingSets
} from "utils/dealing";

const Play = () => {
  /* #region State */
  const [modalOpen, setModalOpen] = useState(false);
  const [shuffleModal, setShuffleModal] = useState(false);

  const [board, setBoard] = useState([]);
  const [cardSet, setCardSet] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [pile, setPile] = useState(shuffleDeck(getDeck()));
  const [isCardSetValid, setIsCardSetValid] = useState(false);
  const [showClassName, setShowClassName] = useState("hidden");
  const [lastTimeout, setLastTimeout] = useState(-1);
  const [totalCardsLeft, setTotalCardsLeft] = useState(pile.length);
  const [cardsDeck, setCardsDecks] = useState(createDeckCards(pile, setPile));
  const [setsAvailable, setSetsAvailable] = useState(getRemainingSets(board));
  /* #endregion */

  const handleDealNewBoardClick = () => {
    cardsDeck.next(false);
    const currentBoard = board.map(
      card => `${card.color}${card.shade}${card.shape}${card.number}`
    );
    const newCardsDeck = createDeckCards([...pile, ...currentBoard], setPile);
    const newBoard = dealNewBoard(newCardsDeck);
    setCardsDecks(newCardsDeck);
    setBoard(newBoard);
    setSetsAvailable(getRemainingSets(newBoard));
  };

  const handlePlayAgainClick = () => window.location.reload();

  const startNotificationAnimation = (validSet, effectResolver) => {
    setShowClassName("show");
    setIsCardSetValid(validSet);
    if (validSet) {
      NProgress.start();
      setLoading(true);
      new Promise((res, rej) => {
        setLastTimeout(setTimeout(res, 3000));
      }).then(() => {
        effectResolver();
        setShowClassName("hidden");
        setLoading(false);
        NProgress.done();
      });
    } else {
      new Promise((res, rej) => {
        setLastTimeout(setTimeout(res, 3000));
      }).then(() => setShowClassName("hidden"));
    }
  };
  /* #region FX */

  const startingBoardEffect = () => {
    if (board.length === 0) {
      let startingBoard = dealNewBoard(cardsDeck);
      setBoard(startingBoard);
      setSetsAvailable(getRemainingSets(startingBoard));
      setGameStarted(true);
    }
  };

  const setsAvailableEffect = () => {
    if (setsAvailable === 0) {
      if (board.length > 0) {
        setModalOpen(true);
        setShuffleModal(pile.length > 0);
      } else {
        if (gameStarted) {
          setModalOpen(true);
          setShuffleModal(false);
        }
      }
    } else {
      setModalOpen(false);
    }
  };

  const cardSetFoundEffect = () => {
    if (cardSet.length === 3) {
      if (isSet(...cardSet)) {
        let newBoard = [...board];
        const positions = cardSet.map(({ index }) => index).sort();
        positions.map(position =>
          newBoard.splice(position, 1, cardsDeck.next(true).value || BLANK_CARD)
        );
        const effectResolver = () => {
          setBoard(newBoard);
          setIsCardSetValid(true);
          setTotalCardsLeft(totalCardsLeft - 3);
          setSetsAvailable(getRemainingSets(newBoard));
        };
        startNotificationAnimation(true, effectResolver);
      } else {
        startNotificationAnimation(false);
      }
    } else {
      setShowClassName("hidden");
      clearTimeout(lastTimeout);
    }
  };

  useEffect(startingBoardEffect, []);
  useEffect(setsAvailableEffect, [setsAvailable]);
  useEffect(cardSetFoundEffect, [cardSet]);
  /* #endregion */

  return (
    <Page>
      <Modal
        modalOpen={modalOpen}
        shuffleModal={shuffleModal}
        handlePlayAgainClick={handlePlayAgainClick}
        handleDealNewBoardClick={handleDealNewBoardClick}
      />
      <Notification isSet={isCardSetValid} showClassName={showClassName} />
      <Board loading={loading}>
        <CardList
          list={board}
          cardSet={cardSet}
          setCardSet={setCardSet}
          setIsCardSetValid={setIsCardSetValid}
        />
      </Board>
      <GameStatus
        remainingSets={setsAvailable}
        totalCardsLeft={totalCardsLeft}
      />
      <BoardMessage loading={loading} />
    </Page>
  );
};

export default Play;
