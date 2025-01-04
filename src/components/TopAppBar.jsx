import React from 'react'

const TopAppBar = () => {
  return (
    <nav> 
      <div className='bread-crumbs'>
        <span>New Plan</span>
        <span>/</span>
        <span className='active-route'>
          &lt;New Plan Name&gt;
        </span>
      </div>
      <div className='button-group'>
        <button className='secondary-button'>
          Create Shipment
        </button>
      </div>
    </nav> 
  )
}

export default TopAppBar