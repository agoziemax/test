import React from 'react'
import { FiSearch } from 'react-icons/fi';
import './searchbar.css';
import NotificationBell from '../../assets/notification-bell.svg'
import AdminImage from '../../assets/admin-image.svg';

function SearchBar() {
  const handleSubmit = (e) => {
  e.preventDefault()

  }

  return (
    <div className='pt-5 d-flex flex-wrap-reverse row gap-5 pb-2'>
      <div className='col'>
        <form action='' onSubmit={handleSubmit}>
          <div className='search-bar'>
            <input type='text' placeholder='Search for anything here' className='form-control ms-3' />
            <button className=''>
              <FiSearch/>
            </button>
          </div>
        </form>
      </div>

      <div className='col ms-3'>
        <div className=' d-flex  gap-5'>
          <div className='d-flex gap-2'>
            <div>
              <img src={AdminImage} alt='adminImage' />
            </div>
            <div>
              <p className='mb-0'>Karim benzema</p>
              <small className='mt-0'>Admin</small>
            </div>
          </div>
          <div>
            <img src={NotificationBell} alt='notification bell' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar
