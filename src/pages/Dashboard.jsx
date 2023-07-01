import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import '../components/cards/card.css';
import SearchBar from '../components/searchbar/SearchBar';
import images from '../assets/images';
import DashTable from '../components/dashboard-table/DashTable';
import CardList from '../components/cards/CardList';
import AnalyticsFilter from '../components/analytics-filter/AnalyticsFilter';
import RevenueChart from '../components/revenue-chart/RevenueChart';

function Dashboard() {


  const tableHeaders = [

    { label: 'Agent', key: 'agent' },
    { label: 'Status', key: 'status' },
    { label: 'SHS Companies', key: 'shsCompanies' },
    { label: 'No of Users', key: 'numUsers' },
    { label: 'Total Amount', key: 'totalAmount' },
  ];

  const rows = [
    {
      agentImage: images.agentImage1,
      agent: 'Bluenose Bolade',
      status: 'Enabled',
      shsCompany: 'SHS Company-Second',
      numUsers: 300,
      totalAmount: '300,000',
      totalAmountColor: '#11B04C',
    },

    {
      agentImage: images.agentImage2,
      agent: 'Pennywise Amaka',
      status: 'Disabled',
      shsCompany: 'SHS Company-Third',
      numUsers: 200,
      totalAmount: '200,000',
      totalAmountColor: '#11B04C',
    },
    {
      agentImage: images.agentImage3,
      agent: 'Flotsam Joy',
      status: 'Enabled',
      shsCompany: 'SHS Company-Third',
      numUsers: 200,
      totalAmount: '200,000',
      totalAmountColor: '#11B04C',
    },
    {
      agentImage: images.agentImage4,
      agent: 'Gregautsch Janet',
      status: 'Disabled',
      shsCompany: 'SHS Company-First',
      numUsers: 10,
      totalAmount: '59,000',
      totalAmountColor: '#11B04C',
    },
  ];


  return (
    <div className='d-flex' style={{ backgroundColor: '#F5F5F5', width: 'auto', overflowX: 'auto' }}>
      <Sidebar className='sidebar-height' />

      <div className='dashboard'>
        <SearchBar className='' />
        <div className='row ms-1 mt-5'>
          <p className='dash-heading'>In the last 30 days,</p>
          <div className='col-md d-flex gap-4 flex-wrap flex-column'>
            <CardList />
            <AnalyticsFilter />
            <DashTable headers={tableHeaders} rows={rows} />
          </div>
          <div className='col-md-4 right-col'>
            <RevenueChart />
          </div>
        </div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default Dashboard;
