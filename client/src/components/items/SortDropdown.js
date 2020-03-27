import React from 'react';

const SortDropdown = () => {
  return (
    <div className="btn-group dropleft float-right">
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Sort
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">
          Sort by price ascending
        </a>
        <a className="dropdown-item" href="#">
          Sort by price descending
        </a>
        <a className="dropdown-item" href="#">
          Sort by name
        </a>
        <a className="dropdown-item" href="#">
          Sort by the latest
        </a>
      </div>
    </div>
  );
};

export default SortDropdown;
