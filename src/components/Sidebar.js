import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 250px;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

const MenuItem = styled.div`
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #333;
  cursor: pointer;
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo src="/flabble_logo.png" alt="Flabble.AI" />
      <MenuItem>MARCO</MenuItem>
      <MenuItem>Inside</MenuItem>
      <MenuItem>Social Watch</MenuItem>
      <MenuItem>Web Analytics</MenuItem>
    </SidebarWrapper>
  );
};

export default Sidebar;
