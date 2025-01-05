import React from 'react'
import Breadcrumbs from './BreadCrumbs';
const TopAppBar = () => {

  const breadcrumbs = ['New Plan', 'New Plan Name'];

  return (
    <nav> 
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className='button-group'>
        <button className='secondary-button'>
          Create Shipment
        </button>
      </div>
    </nav> 
  )
}

export default TopAppBar