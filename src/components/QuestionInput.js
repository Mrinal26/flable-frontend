import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  margin-top: 10px;
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

const QuestionInput = ({ onAskQuestion }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAskQuestion(question);
    setQuestion('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask Marco..."
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default QuestionInput;
