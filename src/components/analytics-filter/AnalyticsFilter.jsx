import React from 'react';
import './analytics.css';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

function AnalyticsFilter({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className='analytics-container'>
      <div className='row'>
        <div className='col'>
          <p className='my-0'>Analytics</p>
          <small>Monitor agents, sales, reviews etc</small>
        </div>
        <div className='col'>
          <form onSubmit={handleSubmit}>
            <div className='search-container mt-4'>
              <span className='search-icon ps-2'>
                <FiSearch className='' />
              </span>
              <input
                type='text'
                placeholder='Search agents'
                value={searchTerm}
                onChange={{ handleInputChange }}
                className=' border-0 py-1  rounded-3 me-3 pe-5'
              />
              <button type='submit' className='filter'>
                Filter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsFilter;
