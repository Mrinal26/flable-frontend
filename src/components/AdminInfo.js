import React from 'react';
import styled from 'styled-components';

const AdminInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  .admin-details {
    display: flex;
    align-items: center;

    .admin-photo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    h3 {
      margin: 0;
      font-size: 1.2rem;
      color: #333;
    }

    p {
      margin: 0;
      font-size: 0.9rem;
      color: #777;
    }
  }
`;

const AdminInfo = ({ adminName, adminEmail, adminPhoto }) => {
  return (
    <AdminInfoWrapper>
      <div className="admin-details">
        <img src={adminPhoto} alt="Admin" className="admin-photo" />
        <div>
          <h3>{adminName}</h3>
          <p>{adminEmail}</p>
        </div>
      </div>
    </AdminInfoWrapper>
  );
};

export default AdminInfo;
