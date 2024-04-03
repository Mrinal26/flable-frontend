import React from 'react';

const FeedbackButtons = ({ onFeedback }) => {
  return (
    <div className="feedback-buttons">
      <button className="feedback-button" onClick={() => onFeedback('like')}>
        Like
      </button>
      <button className="feedback-button" onClick={() => onFeedback('dislike')}>
        Dislike
      </button>
    </div>
  );
};

export default FeedbackButtons;
