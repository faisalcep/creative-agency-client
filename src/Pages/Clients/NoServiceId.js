import React from 'react';
import Sidebar from '../../Components/Dashboard/Sidebar/Sidebar';
import '../../Components/Dashboard/Sidebar/Sidebar.css';
import logo from '../../assets/images/logos/logo.png';
import { Link } from 'react-router-dom';
import { loggedInInfo } from '../../Components/Login/loginManager';
import NoOrderId from '../../Components/Dashboard/NoOrderId/NoOrderId';
//==========================================================================

const NoServiceId = () => {
  // Logged in user info from session
  const loggedUSer = loggedInInfo();

  return (
    <div className='container-fluid'>
      <div className='row bg-white py-3'>
        <div className='col-md-2'>
          <Link to='/'>
            <img
              className='text-center'
              style={{ width: '150px', height: '47px' }}
              src={logo}
              alt=''
            />
          </Link>
        </div>
        <div className='col-md-10 d-flex align-items-center justify-content-between mt-3'>
          <h5>Order</h5>
          <h5>{loggedUSer.name}</h5>
        </div>
      </div>
      <div className='row bg-white'>
        <div className='col-md-2 sidebar-pages'>
          <Sidebar />
        </div>
        <div className='col-md-10' style={{ backgroundColor: '#F4F7FC' }}>
          <NoOrderId />
        </div>
      </div>
    </div>
  );
};

export default NoServiceId;
