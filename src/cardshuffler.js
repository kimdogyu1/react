import React, { useState } from 'react';

const CardShuffler = () => {
  const [count, setCount] = useState(1);
  const [selectedBox, setSelectedBox] = useState(null);
  const [actionCounter, setActionCounter] = useState(0); // Counter for dynamic class name

  const generateCards = newCount => {
    return [...Array(newCount).keys()].map((_, index) => index + 1);
  };

  const [cards, setCards] = useState(generateCards(count));

  const handleIncrement = () => {
    if (count < 5) {
      setCount(count + 1);
      const newCard = Math.floor(Math.random() * 10) + 1;
      setCards([...cards, newCard]);
      setActionCounter(actionCounter + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setCards(prevCards => {
        const newCards = [...prevCards.slice(0, -1)];
        return newCards;
      });
      setActionCounter(actionCounter + 1);
    }
  };

  const handleShuffle = () => {
    const newCards = [...cards];
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * newCards.length);
      newCards[randomIndex] = Math.floor(Math.random() * 12) + 1;
    }

    setCards(newCards);
    setActionCounter(actionCounter + 1);
  };

  const handleResult = () => {
    setSelectedBox(null);
    const randomIndex = Math.floor(Math.random() * count);
    setSelectedBox(cards[randomIndex]);
    setCards([cards[randomIndex]]);
    setActionCounter(actionCounter + 1);
  };

  return (
    <div className="inner">
      <button className="btn_increment" onClick={handleIncrement}>
        증가
      </button>
      <button className="btn_decrement" onClick={handleDecrement}>
        감소
      </button>
      <button className="btn_shuffle" onClick={handleShuffle}>
        셔플
      </button>
      <button className="btn_result" onClick={handleResult}>
        결과
      </button>
      <div className="card_area">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card_item item_${String(card).padStart(2, '0')}`}
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardShuffler;
