import React from 'react';

const ChatHistory = ({ chatHistory }) => {
  return (
    <div className="chat-history">
      <h2>Chat History</h2>
      <ul>
        {chatHistory.map((message, index) => (
          <li key={index}>
            <strong>Question:</strong> {message.question}<br />
            <strong>Answer:</strong> {message.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatHistory;
