import React from 'react';

const AdminInfo = () => {
  const adminName = 'Admin';
  const adminEmail = 'admin@example.com';
  const adminPhotoUrl = 'https://example.com/admin-photo.jpg';

  return (
    <div className="admin-info">
      <div className="admin-photo">
        <img src={adminPhotoUrl} alt="Admin" />
      </div>
      <div className="admin-details">
        <h3>{adminName}</h3>
        <p>{adminEmail}</p>
      </div>
    </div>
  );
};

export default AdminInfo;
