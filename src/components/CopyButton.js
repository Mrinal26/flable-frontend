import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const CopyButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      Copy
    </Button>
  );
};

export default CopyButton;
