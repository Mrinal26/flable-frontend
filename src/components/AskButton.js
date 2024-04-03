import React from 'react';

const AskButton = ({ onClick }) => {
  return (
    <button className="ask-button" onClick={onClick}>
      Ask
    </button>
  );
};

export default AskButton;
