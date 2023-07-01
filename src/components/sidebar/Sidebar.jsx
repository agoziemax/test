import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import SterlingLogo from '../../assets/logo.svg';
import { AiOutlineAppstore } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { HiOutlineUser } from 'react-icons/hi';

const Sidebar = () => {
  const items = [
    {
      icon: <AiOutlineAppstore />,
      label: 'Dashboard',
      key: '/Dashboard',
    },
    {
      icon: <HiOutlineUser />,
      label: 'Agents',
      key: '/Agents',
    },

    {
      icon: <BiLogOut />,
      label: 'Logout',
      key: '/',
    },
  ];

  return (
    <div className='main-container d-flex'>
      <div className='sidebar-container'>
        <div className='sidebar-title mb-4 mt-5 pt-2 d-flex'>
          <span className='pe-2'>
            <img src={SterlingLogo} alt='logo' srcSet='' />
          </span>{' '}
          <p className='pt-2 dash-title'> Sterling Power Wallet</p>
        </div>

        <ul className='sidebar-info'>
          {items.map((item, index) => {
            return (
              <div key={index}>
                <NavLink to={item.key}>
                  <li>
                    <span>{item.icon}</span>
                    <p className='pt-3 dash-label'>{item.label}</p>
                  </li>
                </NavLink>
              </div>
            );
          })}
        </ul>
      </div>
      {/* <div className='mt-5'>Notofication pane</div> */}

    </div>
  );
};

export default Sidebar;
