import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            className={`page-btn ${currentPage === pageNumber ? 'active' : ''}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;