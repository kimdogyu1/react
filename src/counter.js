import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(1);
  const [boxes, setBoxes] = useState([]);

  const handleIncrement = () => {
    if (count < 5) {
      setCount(count + 1);
      setBoxes([...boxes, count]);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setBoxes([...boxes, count]);
    }
  };

  return (
    <div>
      <h1>카운트: {count}</h1>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: 'lightblue',
              margin: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {box}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterApp;
