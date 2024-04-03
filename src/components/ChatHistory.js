import React from 'react';
import styled from 'styled-components';

const ChatHistoryWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  max-height: 300px;
  overflow-y: auto;

  h2 {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 1.2rem;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
    color: #555;

    strong {
      font-weight: bold;
    }
  }
`;

const ChatHistory = ({ chatHistory }) => {
  return (
    <ChatHistoryWrapper>
      <h2>Chat History</h2>
      <ul>
        {chatHistory.map((item, index) => (
          <li key={index}>
            <strong>Question:</strong> {item.question}<br />
            <strong>Response:</strong> {item.response}
          </li>
        ))}
      </ul>
    </ChatHistoryWrapper>
  );
};

export default ChatHistory;
