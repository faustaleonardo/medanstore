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
        <a href="/items?sort_by=price&sort=asc" className="dropdown-item">
          Sort by price ascending
        </a>
        <a href="/items?sort_by=price&sort=desc" className="dropdown-item">
          Sort by price descending
        </a>
        <a href="/items?sort_by=name" className="dropdown-item">
          Sort by name
        </a>
        <a href="/items?latest" className="dropdown-item">
          Sort by the latest
        </a>
      </div>
    </div>
  );
};

export default SortDropdown;
