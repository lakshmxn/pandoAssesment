import React, { useState } from 'react';
import logisticsData from '../utils/constants';
const PlannedGroup = () => {
  const [isSideTabOpen, setIsSideTabOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [activeTab,setActiveTab] = useState('map');

  const tabButtons = [
    { id:'map',label:'Map'},
    { id:'details',label:'Details'}
  ]
  const tableData = logisticsData;
  const handleRowClick = (row) => {
    setSelectedRow(row);
    setIsSideTabOpen(true);
  };

  const handleCloseSideTab = () => {
    setIsSideTabOpen(false);
    setSelectedRow(null);
  };

  const toggleTab = (tabId)=>{
    setActiveTab(tabId);
  }
  return (
      <main className="main-content">
        <table className="table">
          <thead>
            <tr>
              <th>S.NO.</th>
              <th>ORIGIN</th>
              <th>DESTINATION</th>
              <th>CARRIER | TYPE</th>
              <th>MAX UITILIZATION | VEHICLE</th>
              <th>TOTAL | WEIGHT | QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id} onClick={() => handleRowClick(row)}>
                <td>{row.id}</td>
                <td>{row.origin?.city}{row.origin?.state}</td>
                <td>{row.destination?.city}{row.destination?.state}</td>
                <td>{row.carrier?.name}{row.carrier?.type}</td>
                <td>{row.utilization?.percentage}{row.utilization?.vehicle}</td>
                <td>
                  <div>
                    <span>
                      {row.total?.weight}{row.total?.weightUnit}
                    </span>
                    <span>
                      orders: {row.total?.orders}
                    </span>
                  </div>
                  <div>
                    <span>
                      {row.total?.quantity}{row.total?.quantityUnit}
                    </span>
                    <span>
                      pallets : {row.total?.pallets}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={isSideTabOpen ? 'side-tab active' : 'side-tab'}>
          {isSideTabOpen && (
            <>
              <div className="side-tab-content">
                <h3>Planned Shipment 01</h3>
                <button className="close-btn" onClick={handleCloseSideTab}>
                  ❌
                </button>
                <div className='button-group'>
                  {tabButtons.map((button)=> (
                    <button onClick={() => {toggleTab(button.id)}}>{button.label}</button>
                  ))}
                </div>
              </div>
              { activeTab == 'map' && 
                  <img className='map' src='assets/map.png'/>
              }
              { activeTab == 'details' && (
                <>
                  <h3>Details</h3>
                  <p><strong>Name:</strong> {selectedRow?.name}</p>
                  <p><strong>Age:</strong> {selectedRow?.age}</p>
                </>
              )
              }
            </>
          )}
        </div>      
      </main>
  );
};

export default PlannedGroup;
