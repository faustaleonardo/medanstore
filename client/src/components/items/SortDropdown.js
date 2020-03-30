import React from 'react';

const SortDropdown = () => {
  const getQueryString = sort => {
    let oldQueryString = window.location.search;

    oldQueryString = oldQueryString.replace(
      /(\?sort_by=price\&sort=asc|\&sort_by=price\&sort=asc|\?sort_by=price\&sort=desc|\&sort_by=price\&sort=desc|\?sort_by=name|\&sort_by=name|\?sort_by=latest|\&sort_by=latest)/,
      ''
    );

    let queryString = oldQueryString ? `&` : '?';
    switch (sort) {
      case 'price-asc':
        queryString += 'sort_by=price&sort=asc';
        break;
      case 'price-desc':
        queryString += 'sort_by=price&sort=desc';
        break;
      case 'name':
        queryString += 'sort_by=name';
        break;
      case 'latest':
        queryString += 'sort_by=latest';
        break;
      default:
        break;
    }

    const result = `/items${oldQueryString}${queryString}`;
    return result;
  };

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
        <a href={getQueryString('price-asc')} className="dropdown-item">
          Sort by price ascending
        </a>
        <a href={getQueryString('price-desc')} className="dropdown-item">
          Sort by price descending
        </a>
        <a href={getQueryString('name')} className="dropdown-item">
          Sort by name
        </a>
        <a href={getQueryString('latest')} className="dropdown-item">
          Sort by latest
        </a>
      </div>
    </div>
  );
};

export default SortDropdown;
