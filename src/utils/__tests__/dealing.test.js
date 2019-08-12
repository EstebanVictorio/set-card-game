import {
  getDeck,
  shuffleDeck,
  dealNewBoard,
  createDeckCards,
  getRemainingSets
} from "./../dealing";
import { BLANK_CARD } from "./../constants";

const runDealingTestSuite = () => {
  it("Deals a valid card", () => {
    let pile = shuffleDeck(getDeck());
    const setPile = newPile => (pile = [...newPile]);
    const cards = createDeckCards(pile, setPile);
    const { color, shade, shape, number } = cards.next(true).value;
    expect(color).not.toBeUndefined();
    expect(shade).not.toBeUndefined();
    expect(shape).not.toBeUndefined();
    expect(number).not.toBeUndefined();
    expect(color >= 0 && color < 3).toBeTruthy();
    expect(shade >= 0 && color < 3).toBeTruthy();
    expect(shape >= 0 && color < 3).toBeTruthy();
    expect(number >= 0 && color < 3).toBeTruthy();
    expect(pile).toHaveLength(80);
    cards.next(false);
  });

  it("Deals multiple cards", () => {
    let pile = shuffleDeck(getDeck());
    let cardCount = pile.length;
    const setPile = newPile => (pile = [...newPile]);
    const cards = createDeckCards(pile, setPile);
    for (let i = 0; i < 3; i++) {
      const { color, shade, shape, number } = cards.next(true).value;
      cardCount--;
      expect(color).not.toBeUndefined();
      expect(shade).not.toBeUndefined();
      expect(shape).not.toBeUndefined();
      expect(number).not.toBeUndefined();
      expect(color >= 0 && color < 3).toBeTruthy();
      expect(shade >= 0 && color < 3).toBeTruthy();
      expect(shape >= 0 && color < 3).toBeTruthy();
      expect(number >= 0 && color < 3).toBeTruthy();
      expect(pile).toHaveLength(cardCount);
    }
    // Terminate card generation from deck
    cards.next(false);
  });

  it("Deals starting board", () => {
    let pile = shuffleDeck(getDeck());
    const setPile = newPile => (pile = [...newPile]);
    const cards = createDeckCards(pile, setPile);
    let startingBoard = [];

    for (let i = 0; i < 12; i++) {
      startingBoard.push(cards.next(true).value);
      const { color, shade, shape, number } = startingBoard[i];
      expect(color).not.toBeUndefined();
      expect(shade).not.toBeUndefined();
      expect(shape).not.toBeUndefined();
      expect(number).not.toBeUndefined();
      expect(color >= 0 && color < 3).toBeTruthy();
      expect(shade >= 0 && color < 3).toBeTruthy();
      expect(shape >= 0 && color < 3).toBeTruthy();
      expect(number >= 0 && color < 3).toBeTruthy();
    }
    expect(pile).toHaveLength(69);
    expect(startingBoard).toHaveLength(12);
    // Terminate card generation from deck
    cards.next(false);
  });

  it("Deals whole deck", () => {
    let pile = shuffleDeck(getDeck());
    const setPile = newPile => (pile = [...newPile]);
    const cards = createDeckCards(pile, setPile);
    for (let i = 0; i < 81; i++) {
      const { color, shade, shape, number } = cards.next(true).value;
      expect(color).not.toBeUndefined();
      expect(shade).not.toBeUndefined();
      expect(shape).not.toBeUndefined();
      expect(number).not.toBeUndefined();
      expect(color >= 0 && color < 3).toBeTruthy();
      expect(shade >= 0 && color < 3).toBeTruthy();
      expect(shape >= 0 && color < 3).toBeTruthy();
      expect(number >= 0 && color < 3).toBeTruthy();
    }
    expect(pile).toHaveLength(0);
    // Terminate card generation from deck
    cards.next(false);
  });

  it("Deals and Shuffles deck without messing up values", () => {
    const cardList = [];
    let pile = getDeck();
    const setPile = newPile => (pile = [...newPile]);
    const cards = createDeckCards(pile, setPile);
    for (let i = 0; i < 81; i++) {
      cardList.push(cards.next(true).value);
      const { color, shade, shape, number } = cardList[i];
      expect(color).not.toBeUndefined();
      expect(shade).not.toBeUndefined();
      expect(shape).not.toBeUndefined();
      expect(number).not.toBeUndefined();
      expect(color >= 0 && color < 3).toBeTruthy();
      expect(shade >= 0 && color < 3).toBeTruthy();
      expect(shape >= 0 && color < 3).toBeTruthy();
      expect(number >= 0 && color < 3).toBeTruthy();
    }
    expect(pile).toHaveLength(0);
    cards.next(false);
    const shuffledDeck = shuffleDeck(cardList);
    for (let i = 0; i < cardList.length; i++) {
      const originalCard = cardList[i];
      expect(
        shuffledDeck.filter(({ color, shade, shape, number }) => {
          return (
            originalCard.color === color &&
            originalCard.shade === shade &&
            originalCard.shape === shape &&
            originalCard.number === number
          );
        })
      ).toHaveLength(1);
    }
  });

  it("Gets remaining sets", () => {
    const board1 = [
      {
        color: 0,
        shade: 0,
        shape: 0,
        number: 0
      },
      {
        color: 0,
        shade: 0,
        shape: 0,
        number: 1
      },
      {
        color: 0,
        shade: 0,
        shape: 0,
        number: 2
      },
      {
        color: 0,
        shade: 0,
        shape: 1,
        number: 0
      },
      {
        color: 0,
        shade: 0,
        shape: 1,
        number: 1
      },
      {
        color: 0,
        shade: 0,
        shape: 1,
        number: 2
      },
      {
        color: 0,
        shade: 0,
        shape: 2,
        number: 0
      },
      {
        color: 0,
        shade: 0,
        shape: 2,
        number: 1
      },
      {
        color: 0,
        shade: 0,
        shape: 2,
        number: 2
      },
      {
        color: 0,
        shade: 1,
        shape: 0,
        number: 0
      },
      {
        color: 0,
        shade: 1,
        shape: 0,
        number: 1
      },
      {
        color: 0,
        shade: 1,
        shape: 0,
        number: 2
      }
    ];
    const board2 = [
      {
        color: 0,
        shade: 1,
        shape: 2,
        number: 0
      },
      {
        color: 2,
        shade: 1,
        shape: 2,
        number: 1
      },
      {
        color: 1,
        shade: 1,
        shape: 2,
        number: 2
      },
      {
        color: 2,
        shade: 0,
        shape: 2,
        number: 2
      },
      {
        color: 1,
        shade: 0,
        shape: 2,
        number: 1
      },
      {
        color: 1,
        shade: 1,
        shape: 2,
        number: 1
      },
      {
        color: 2,
        shade: 2,
        shape: 2,
        number: 2
      },
      {
        color: 0,
        shade: 0,
        shape: 2,
        number: 0
      },
      {
        color: 2,
        shade: 0,
        shape: 2,
        number: 1
      }
    ];
    const board3 = [
      {
        color: 1,
        shade: 0,
        shape: 1,
        number: 1
      },
      {
        color: 2,
        shade: 0,
        shape: 1,
        number: 2
      },
      {
        color: 2,
        shade: 2,
        shape: 1,
        number: 2
      },
      {
        color: 1,
        shade: 0,
        shape: 1,
        number: 2
      },
      {
        color: 1,
        shade: 2,
        shape: 1,
        number: 2
      },
      {
        color: 0,
        shade: 1,
        shape: 1,
        number: 2
      },
      {
        color: 1,
        shade: 2,
        shape: 1,
        number: 0
      },
      {
        color: 0,
        shade: 2,
        shape: 1,
        number: 2
      },
      {
        color: 0,
        shade: 1,
        shape: 1,
        number: 0
      }
    ];
    const board4 = [
      {
        color: 0,
        shade: 0,
        shape: 2,
        number: 0
      },
      {
        color: 1,
        shade: 2,
        shape: 1,
        number: 1
      },
      {
        color: 2,
        shade: 2,
        shape: 2,
        number: 1
      },
      {
        color: 0,
        shade: 1,
        shape: 1,
        number: 2
      },
      {
        color: 2,
        shade: 2,
        shape: 1,
        number: 1
      },
      {
        color: 1,
        shade: 1,
        shape: 2,
        number: 0
      },
      {
        color: 1,
        shade: 2,
        shape: 2,
        number: 2
      },
      {
        color: 2,
        shade: 1,
        shape: 0,
        number: 0
      },
      {
        color: 0,
        shade: 2,
        shape: 0,
        number: 0
      },
      {
        color: 0,
        shade: 0,
        shape: 2,
        number: 2
      },
      {
        color: 0,
        shade: 1,
        shape: 1,
        number: 1
      },
      {
        color: 1,
        shade: 1,
        shape: 2,
        number: 2
      }
    ];
    const board5 = [
      {
        color: 0,
        shade: 0,
        shape: 2,
        number: 2
      },
      {
        color: 1,
        shade: 2,
        shape: 1,
        number: 2
      },
      {
        color: 0,
        shade: 1,
        shape: 1,
        number: 0
      },
      {
        color: 2,
        shade: 1,
        shape: 1,
        number: 0
      },
      {
        color: 0,
        shade: 0,
        shape: 2,
        number: 0
      },
      {
        color: 1,
        shade: 2,
        shape: 0,
        number: 1
      },
      {
        color: 0,
        shade: 0,
        shape: 2,
        number: 1
      },
      {
        color: 1,
        shade: 2,
        shape: 2,
        number: 0
      },
      {
        color: 2,
        shade: 1,
        shape: 1,
        number: 2
      },
      {
        color: 2,
        shade: 1,
        shape: 0,
        number: 2
      },
      {
        color: 1,
        shade: 1,
        shape: 0,
        number: 2
      },
      {
        color: 0,
        shade: 2,
        shape: 0,
        number: 0
      }
    ];

    const board6 = [
      {
        color: 0,
        shade: 0,
        shape: 0,
        number: 0
      },
      {
        color: 1,
        shade: 1,
        shape: 1,
        number: 1
      },
      {
        color: 2,
        shade: 2,
        shape: 2,
        number: 2
      },
      { ...BLANK_CARD },
      { ...BLANK_CARD },
      { ...BLANK_CARD }
    ];

    expect(getRemainingSets(board1)).toBe(13);
    expect(getRemainingSets(board2)).toBe(4);
    expect(getRemainingSets(board3)).toBe(4);
    expect(getRemainingSets(board4)).toBe(6);
    expect(getRemainingSets(board5)).toBe(6);
    expect(getRemainingSets(board6)).toBe(1);
  });

  it("Shuffles board into deck and deals a new board", () => {
    let pile = [
      "2211",
      "1122",
      "0122",
      "2220",
      "0012",
      "2102",
      "1010",
      "2011",
      "2212",
      "2112",
      "1210",
      "1211",
      "2020",
      "2200",
      "2111",
      "2110",
      "1220",
      "0002",
      "0010",
      "2202",
      "0022",
      "1001",
      "1121",
      "1201",
      "1200",
      "2120",
      "1120",
      "0121",
      "1101",
      "2222",
      "2201",
      "2210",
      "1022",
      "0210",
      "0000",
      "0011",
      "0202",
      "0221",
      "1012",
      "0110",
      "0212",
      "0020",
      "2002",
      "1000",
      "2100",
      "0112",
      "1021",
      "2022",
      "0021"
    ];
    let board = [
      { color: 1, shade: 2, shape: 0, number: 2 },
      { color: 1, shade: 1, shape: 1, number: 0 },
      { color: 1, shade: 2, shape: 2, number: 2 },
      { color: 0, shade: 2, shape: 0, number: 1 },
      { color: 0, shade: 1, shape: 0, number: 1 },
      { color: 1, shade: 0, shape: 2, number: 0 },
      { color: 0, shade: 2, shape: 0, number: 0 },
      { color: 1, shade: 1, shape: 1, number: 1 },
      { color: 0, shade: 2, shape: 2, number: 0 },
      { color: 2, shade: 1, shape: 2, number: 2 },
      { color: 2, shade: 0, shape: 2, number: 1 },
      { color: 0, shade: 1, shape: 1, number: 1 }
    ];

    let oldWholeRemainingDeck = pile.concat(
      board.map(card => `${card.color}${card.shade}${card.shape}${card.number}`)
    );

    pile = pile.concat(
      board.map(card => `${card.color}${card.shade}${card.shape}${card.number}`)
    );
    const setPile = newPile => (pile = [...newPile]);

    const cardsDeck = createDeckCards(pile, setPile);
    const newBoard = dealNewBoard(cardsDeck);

    let newWholeRemainingDeck = pile.concat(
      newBoard.map(
        card => `${card.color}${card.shade}${card.shape}${card.number}`
      )
    );

    expect(
      oldWholeRemainingDeck.length === newWholeRemainingDeck.length
    ).toBeTruthy();

    expect(board.length === newBoard.length).toBeTruthy();

    for (let i = 0; i < oldWholeRemainingDeck.length; i++) {
      const oldCardStr = oldWholeRemainingDeck[i];
      expect(
        newWholeRemainingDeck.filter(
          newCardStr =>
            newCardStr[0] === oldCardStr[0] &&
            newCardStr[1] === oldCardStr[1] &&
            newCardStr[2] === oldCardStr[2] &&
            newCardStr[3] === oldCardStr[3]
        )
      ).toHaveLength(1);
    }
  });
};

describe("Dealing", runDealingTestSuite);
