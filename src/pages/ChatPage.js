import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import ChatHistory from '../components/ChatHistory';
import AdminInfo from '../components/AdminInfo';
import ExportButton from '../components/ExportButton';
import CopyButton from '../components/CopyButton';
import FeedbackButtons from '../components/FeedbackButtons';

const ChatPage = () => {
  const [chatHistory, setChatHistory] = useState([]);
  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await fetch('/api/chat/history');

        if (!response.ok) {
          throw new Error('Failed to fetch chat history');
        }

        const data = await response.json();
        setChatHistory(data);
      } catch (error) {
        console.error('Error fetching chat history:', error);
      }
    };

    fetchChatHistory();
  }, []);

  const handleExportPDF = async () => {
    try {
      const response = await fetch('/api/chat/export/pdf', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/pdf'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to export chat history to PDF');
      }

    } catch (error) {
      console.error('Error exporting chat history to PDF:', error);
    }
  };

  const handleCopyResponse = () => {
    try {
      const lastResponse = chatHistory[chatHistory.length - 1].answer;
      navigator.clipboard.writeText(lastResponse)
        .then(() => {
          console.log('Response copied to clipboard:', lastResponse);
        })
        .catch(error => {
          console.error('Error copying response to clipboard:', error);
        });
    } catch (error) {
      console.error('Error copying response:', error);
    }
  };
  
  const handleFeedback = async (feedbackType) => {
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ feedbackType })
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      console.log(`Feedback received: ${feedbackType}`);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="chat-page">
      <Sidebar />
      <div className="content">
        <AdminInfo />
        <ChatHistory chatHistory={chatHistory} />
        <div className="chat-controls">
          <ExportButton onClick={handleExportPDF} />
          <CopyButton onClick={handleCopyResponse} />
          <FeedbackButtons onFeedback={handleFeedback} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
