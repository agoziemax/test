import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import SearchBar from '../components/searchbar/SearchBar';

function Agents() {
  return (
    <div className='d-flex' style={{ backgroundColor: '#F5F5F5' }}>
      <Sidebar />
      <div>
        <SearchBar />
        <div className='row ms-1 mt-2'>
          <div className='col border border-primary'>Agent section</div>
        </div>
      </div>
    </div>
  );
}

export default Agents;
