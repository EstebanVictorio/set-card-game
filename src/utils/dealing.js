export const getDeck = () => {
  let deck = [];
  for (let i = 0; i < 81; i++) {
    let base3Num = i.toString(3);
    deck.push(base3Num.padStart(4, 0));
  }
  return deck;
};

export const isSet = (cardOne, cardTwo, cardThree) => {
  const list = [cardOne, cardTwo, cardThree];
  const isSetByColor =
    list.reduce((prev, { color }) => prev + color, 0) % 3 === 0;
  const isSetByShade =
    list.reduce((prev, { shade }) => prev + shade, 0) % 3 === 0;
  const isSetByShape =
    list.reduce((prev, { shape }) => prev + shape, 0) % 3 === 0;
  const isSetByNumber =
    list.reduce((prev, { number }) => prev + number, 0) % 3 === 0;
  const isCardSet =
    isSetByColor && isSetByShade && isSetByShape && isSetByNumber;
  return isCardSet;
};

export const getRemainingSets = board => {
  let remainingSets = 0;
  let cleanBoard = board.filter(
    card =>
      card.color !== null &&
      card.shade !== null &&
      card.shape !== null &&
      card.number !== null
  );
  for (let i = 0; i < cleanBoard.length; i++) {
    for (let j = i + 1; j < cleanBoard.length; j++) {
      for (let k = j + 1; k < cleanBoard.length; k++) {
        remainingSets += isSet(cleanBoard[i], cleanBoard[j], cleanBoard[k]);
      }
    }
  }
  return remainingSets;
};

export const shuffleDeck = sortedDeck => {
  let deckToShuffle = sortedDeck;
  let remainingPositions = deckToShuffle.length;
  while (remainingPositions > 0) {
    let i = Math.floor(Math.random() * remainingPositions--);
    let temp = deckToShuffle[remainingPositions];
    deckToShuffle[remainingPositions] = deckToShuffle[i];
    deckToShuffle[i] = temp;
  }
  return deckToShuffle;
};

export const dealNewBoard = cardsDeck => {
  let board = [];
  for (let i = 0; i < 12; i++) {
    board.push(cardsDeck.next(true).value);
  }
  return board;
};

export function* createDeckCards(cardPile, setPile) {
  let gameplay = true;
  while (cardPile.length > 0 && gameplay) {
    const [color, shade, shape, number] = cardPile[0];
    setPile(cardPile.slice(1));
    cardPile = cardPile.slice(1);
    const card = {
      color: Number(color),
      shade: Number(shade),
      shape: Number(shape),
      number: Number(number)
    };

    const keepPlaying = yield card;
    gameplay = keepPlaying;
  }
  return null;
}
