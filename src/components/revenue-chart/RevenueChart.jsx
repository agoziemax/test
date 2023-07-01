import React from 'react'
import './revenuechart.css'


function RevenueChart() {
  return (
    <div className='main-container p-2'>
      <div className='d-flex  flex-md-wrap justify-content-around mt-2'>
        <p className='total-rev'>Total Revenue</p>
        <div className='right-box d-flex justify-content-between '>
          <small className='pe-2'>Sort by</small>
          <p className='days px-1'>This week</p>
        </div>
      </div>
      <div className='d-flex total  justify-content-center gap '>
        <span className='bullets'></span>
        <p className='me-5'>Total Income</p>
        <span className='bullets2'></span>
        <p>Total Expense</p>
      </div>
      <div className='ps-4'>hehhe</div>
    </div>
  );
}

export default RevenueChart
