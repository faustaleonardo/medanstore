import React from 'react';

const ConditionCheckbox = () => {
  let currentUrlAddress = window.location.href;

  const isChecked = condition => {
    return currentUrlAddress.includes(`condition=${condition}`) ? true : false;
  };

  const handleChange = event => {
    const value = event.target.value;
    const checked = event.target.checked;

    const oldQueryString = window.location.search;

    if (checked) {
      let queryString;
      queryString = oldQueryString ? `&` : '?';
      queryString += `condition=${value}`;

      currentUrlAddress = currentUrlAddress + queryString;
    } else {
      currentUrlAddress = currentUrlAddress.replace(
        /(\?condition=New|\&condition=New|\?condition=Used|\&condition=Used)/,
        ''
      );
    }

    window.location.href = currentUrlAddress;
  };

  return (
    <div>
      <div className="float-left">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="newCheckbox"
            value="New"
            defaultChecked={isChecked('New')}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="newCheckbox">
            New
          </label>
        </div>
      </div>
      <div className="float-left">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="usedCheckbox"
            value="Used"
            defaultChecked={isChecked('Used')}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="usedCheckbox">
            Used
          </label>
        </div>
      </div>
    </div>
  );
};

export default ConditionCheckbox;
