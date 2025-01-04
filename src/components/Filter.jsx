import React, { useState } from 'react';

const Filter = () => {
  const [filterOpen, setfilterOpen] = useState(false);

  function toggleFilterState() {
    setfilterOpen(!filterOpen);
  }

  return (
    <div className="filter-wrapper">
      <div className="filter-container">
        <div className="dropDown">
          <label>Planning Group</label>
          <span>:</span>
          <span>Arizona Zone Retail</span>
          <img src="/assets/dropdown-arrow.png" alt="Dropdown arrow" style={{ width: '10px', height: '5px' }} />
        </div>
        {!filterOpen && (
          <div onClick={toggleFilterState} className="icon-wrapper">
            <img src="/assets/filter-icon.svg" alt="Filter Icon" />
          </div>
        )}
        {filterOpen && (
          <div className="filter-select">
            <img src="/assets/filter-icon.svg" alt="Filter Icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
