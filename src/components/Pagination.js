// src/components/Pagination.js
import React from 'react';
import { PaginationContainer, PageButton } from '../css/StyledComponents';

const Pagination = ({ totalItems, itemsPerPage, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <PageButton
          key={number}
          active={currentPage === number}
          onClick={() => paginate(number)}
        >
          {number}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
