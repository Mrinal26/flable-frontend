import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ChatHistory from '../components/ChatHistory';
import AdminInfo from '../components/AdminInfo';
import QuestionInput from '../components/QuestionInput';
import AskButton from '../components/AskButton';

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

      setChatHistory(prevChat => [...prevChat, { question, answer: data.answer }]);
    } catch (error) {
      console.error('Error asking question:', error);
    }
  };

  return (
    <div className="home-page">
      
      <Sidebar />

      <div className="content">
        
        <AdminInfo />
        <ChatHistory chatHistory={chatHistory} />

        <div className="chat-controls">
          <QuestionInput onAskQuestion={handleAskQuestion} />
          <AskButton onClick={handleAskQuestion} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
