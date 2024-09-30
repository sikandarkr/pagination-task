// src/components/StyledComponents.js
import styled from 'styled-components';

// Styled container for the entire paginated list
export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 40px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

// Styled header
export const Header = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

// Styled list items
export const ListItem = styled.li`
  padding: 20px;
  margin-bottom: 10px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }
`;

// Styled pagination container
export const PaginationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

// Styled pagination buttons
export const PageButton = styled.button`
  margin: 0 5px;
  padding: 8px 12px;
  border: none;
  background: ${({ active }) => (active ? '#4caf50' : '#007bff')};
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background 0.3s;

  &:hover {
    background: ${({ active }) => (active ? '#45a049' : '#0056b3')};
  }
`;
