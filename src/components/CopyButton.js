import React from 'react';

const CopyButton = ({ onClick }) => {
  return (
    <button className="copy-button" onClick={onClick}>
      Copy
    </button>
  );
};

export default CopyButton;
