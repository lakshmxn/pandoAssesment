import React, { useState } from 'react';
import logisticsData from '../utils/constants';
import ShipmentMap from './ShipmentMap';

const PlannedGroup = () => {
  const [isSideTabOpen, setIsSideTabOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [activeTab, setActiveTab] = useState('map');
  const [selectedRows, setSelectedRows] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [timelineExpand,setTimelineExpand] = useState(false);

  const tabButtons = [
    { id: 'map', label: 'Map' },
    { id: 'details', label: 'Details' }
  ];

  const tableData = logisticsData;

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setIsSideTabOpen(true);
  };

  const handleCloseSideTab = () => {
    setIsSideTabOpen(false);
    setSelectedRow(null);
  };

  const toggleTab = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleTimelineExpand = () =>{
    setTimelineExpand(!timelineExpand);
  }

  const handleSelectRow = (rowId,e) => {
    e.stopPropagation();
    setSelectedRows((prev) =>
      prev.includes(rowId) ? prev.filter((id) => id !== rowId) : [...prev, rowId]
    );
  };

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(tableData.map((row) => row.id));
    }
    setIsAllSelected(!isAllSelected);
  };

  return (
    <main className="main-content">
      <table className="table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
              />
            </th>
            <th>S.NO.</th>
            <th>ORIGIN</th>
            <th>DESTINATION</th>
            <th>CARRIER | TYPE</th>
            <th>MAX UTILIZATION | VEHICLE</th>
            <th>TOTAL | WEIGHT | QUANTITY</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id} onClick={() => handleRowClick(row)}>
              <td>
                <div className='table-checkbox'>
                  <img src='/assets/Truck.png'/>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onClick={(e) => {
                      handleSelectRow(row.id,e);
                    }}
                  />
                </div>
              </td>
              <td>{row.id}</td>
              <td>{row.origin?.city} {row.origin?.state}</td>
              <td>{row.destination?.city} {row.destination?.state}</td>
              <td>{row.carrier?.name} {row.carrier?.type}</td>
              <td>{row.utilization?.percentage} {row.utilization?.vehicle}</td>
              <td>
                <div>
                  <span>
                    {row.total?.weight} {row.total?.weightUnit}
                  </span>
                  <span>
                    orders: {row.total?.orders}
                  </span>
                </div>
                <div>
                  <span>
                    {row.total?.quantity} {row.total?.quantityUnit}
                  </span>
                  <span>
                    pallets: {row.total?.pallets}
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
            <div className="side-tab-toggle">
              <h3>Planned Shipment 01</h3>
              <button className="close-btn" onClick={handleCloseSideTab}>
                ❌
              </button>
              <div className='button-group'>
                {tabButtons.map((button) => (
                  <button key={button.id} onClick={() => toggleTab(button.id)}>
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
            {activeTab === 'map' && 
              <ShipmentMap />
            }
            {activeTab === 'details' && (
              <div className='side-tab-content'>
                <div className='shipment-plan-content'>
                <div className="shipment-info">
                  <div className="info-row">
                    <span>Carrier: {selectedRow.carrier.name}</span>
                    <span>Total Distance: {selectedRow.carrier.totalDistance} mi</span>
                  </div>
                  <div className="info-row">
                    <span>Total Wt. {selectedRow.carrier.totalWeight} lbs</span>
                    <span>Total Vol. {selectedRow.carrier.totalVolume} cft</span>
                  </div>
                </div>
                <div className='shipment-plan-header'>
                  <div className='title'>
                    Shipment Plan
                  </div>
                  <button onClick={toggleTimelineExpand}>
                    EXPAND PLAN
                  </button>
                </div>
                <div className='shipment-timeline'>
                  {selectedRow.timeline.map((stop,index)=>(
                    <>
                      <div className='shipment-timeline-header'>
                        <div>
                          <img src={`/assets/${stop.type}-arrow.svg`}/>
                        </div>
                        <div>
                          <div>{stop.name}</div>
                          <div>{stop.address}</div>
                        </div>
                      </div>
                      <div className='shipment-timeline-description'>
                      <div className="vertical-timeline">
                        {index !== selectedRow.timeline.length - 1 && 
                          <> 
                            <div className='circle'></div>
                            <div className='line'></div>
                            <div className='circle'></div>
                          </>
                        }
                      </div>
                        {timelineExpand && <div className="shipment-info">
                          <div className="info-row">
                            <span>Wt. {stop.details.weight}lbs</span>
                            <span>Vol. {stop.details.volume} cft</span>
                          </div>
                          <div className="info-row">
                            <span>Qty. {stop.details.quantity} pcs.</span>
                            <span>Plt. {stop.details.pallets}</span>
                          </div>
                        </div>
                        }
                      </div>
                  </>
                ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>      
    </main>
  );
};

export default PlannedGroup;
