
import React from 'react';

const ExportButton = ({ onClick }) => {
  return (
    <button className="export-button" onClick={onClick}>
      Export PDF
    </button>
  );
};

export default ExportButton;
