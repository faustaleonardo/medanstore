import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
    <nav aria-label="Page navigation" className="item-pagination">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <Link to="/" className="page-link" tabIndex={-1} aria-disabled="true">
            Previous
          </Link>
        </li>
        <li className="page-item">
          <Link to="/" className="page-link">
            1
          </Link>
        </li>
        <li className="page-item">
          <Link to="/" className="page-link">
            2
          </Link>
        </li>
        <li className="page-item">
          <Link to="/" className="page-link">
            3
          </Link>
        </li>
        <li className="page-item">
          <Link to="/" className="page-link">
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
