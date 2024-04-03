import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c82333;
  }
`;

const ExportButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      Export
    </Button>
  );
};

export default ExportButton;
