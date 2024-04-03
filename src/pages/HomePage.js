import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import AdminInfo from '../components/AdminInfo';
import ChatHistory from '../components/ChatHistory';
import QuestionInput from '../components/QuestionInput';
import AskButton from '../components/AskButton';

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const HomePage = () => {
  const [chatHistory, setChatHistory] = useState([]);

  const handleAskQuestion = async (question) => {
    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question })
      });

      if (!response.ok) {
        throw new Error('Failed to ask question');
      }

      const data = await response.json();

      setChatHistory(prevChatHistory => [
        ...prevChatHistory,
        { question, response: data.answer }
      ]);
    } catch (error) {
      console.error('Error asking question:', error);
    }
  };

  return (
    <PageContainer>
      <Sidebar />
      <MainContent>
        <AdminInfo />
        <ChatHistory chatHistory={chatHistory} />
        <QuestionInput onAskQuestion={handleAskQuestion} />
        <AskButton onClick={() => handleAskQuestion('Default question')} />
      </MainContent>
    </PageContainer>
  );
};

export default HomePage;
