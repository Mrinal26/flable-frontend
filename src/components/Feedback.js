import React from 'react';
import styled from 'styled-components';

const FeedbackWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #eee;
  }
`;

const LikeButton = styled(Button)`
  background-color: #28a745;
  color: #fff;
`;

const DislikeButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;
`;

const CopyButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const Feedback = ({ onLike, onDislike, onCopy }) => {
  return (
    <FeedbackWrapper>
      <LikeButton onClick={onLike}>Like</LikeButton>
      <DislikeButton onClick={onDislike}>Dislike</DislikeButton>
      <CopyButton onClick={onCopy}>Copy</CopyButton>
    </FeedbackWrapper>
  );
};

export default Feedback;
