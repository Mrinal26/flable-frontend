import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const AskButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      Ask
    </Button>
  );
};

export default AskButton;
