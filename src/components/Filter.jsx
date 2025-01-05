import React, { useState } from 'react';
import '../styles/filter.css'

const Filter = () => {
  const [filterOpen, setfilterOpen] = useState(false);

  function toggleFilterState() {
    setfilterOpen(!filterOpen);
  }

  return (
    <div className="filter-wrapper">
      <div className="filter-container">
        <div className="dropDown">
          <label>Planning Group : </label>
          <span className='ellipse'>Arizona Zone Retail</span>
          <img src="/assets/dropdown-arrow.png" alt="Dropdown arrow" style={{ width: '10px', height: '5px' }} />
        </div>
        {!filterOpen && (
          <div onClick={toggleFilterState} className="icon-wrapper">
            <img src="/assets/filter-icon.svg" alt="Filter Icon" />
          </div>
        )}
        {filterOpen && (
          <div class="filter-dropdown">
            <label class="label-select">
              <span class="label-text">Label : Select</span>
              <span class="select-arrow"> <img src='/assets/dropdown-arrow.png'/></span>
            </label>
            <div onClick={toggleFilterState} className="icon-wrapper">
              X
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
