import React, { useState, useEffect } from 'react';

const Board = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('messages'));
    if (savedMessages) {
      setMessages(savedMessages);
    }
  }, []);

  const handleChange = event => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    if (inputText.trim() !== '') {
      const newMessage = inputText.trim();
      setMessages([...messages, newMessage]);
      setInputText('');

      localStorage.setItem(
        'messages',
        JSON.stringify([...messages, newMessage]),
      );
    }
  };

  const handleResetStorage = () => {
    localStorage.removeItem('messages');
    setMessages([]);
  };

  return (
    <div className="board_area">
      <h3>Express your luck today</h3>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="ex) I think I'll be lucky!"
      />
      <button onClick={handleSubmit}>Text-Record</button>
      <button onClick={handleResetStorage}>reset</button>

      <ul>
        {}
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Board;
