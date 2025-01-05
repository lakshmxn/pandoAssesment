import React, { useState } from 'react';
import logisticsData from '../utils/constants';
import ShipmentMap from './ShipmentMap';
import ShipmentTable from './ShipmentTable'
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

  const handleSelectRow = (rowId, e) => {
    e.stopPropagation();

    setSelectedRows((prevSelectedRows) => {
      const updatedRows = prevSelectedRows.includes(rowId)
        ? prevSelectedRows.filter((id) => id !== rowId)
        : [...prevSelectedRows, rowId];
  
      setIsAllSelected(updatedRows.length === tableData.length);
      return updatedRows;
    });
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
      <div className={`content-wrapper ${isSideTabOpen ? 'active' : ''}`}>        
          <div className='content-header'>
            <div className='content-title'>
              PLANNED
            </div>
            <div className='content-tag'>
              Optima Generated
            </div>
          </div>
        <div className='table-wrapper'>
          <ShipmentTable
            tableData={logisticsData}
            isSideTabOpen={isSideTabOpen}
            selectedRow={selectedRow}
            selectedRows={selectedRows}
            isAllSelected={isAllSelected}
            onRowClick={handleRowClick}
            onSelectRow={handleSelectRow}
            onSelectAll={handleSelectAll}
          />
        </div>
      </div>
      <div className={isSideTabOpen ? 'side-tab active' : 'side-tab'}>
        {isSideTabOpen && (
          <>
            <div className="side-tab-header">
              <div className='side-tab-title'>
              Planned Shipment 01
              </div>
              <div className='button-group'>
                <button className="visualize-button" >3D Visualisation
                </button>
                <button className="close-button" onClick={handleCloseSideTab}>
                  <img src='/assets/close.png'/>
                </button>
              </div>
            </div>
            <div className='tab-toggle-button-group'>
            <div className='button-group'>
                {tabButtons.map((button) => (
                  <button className={`toggle-button
                  ${activeTab ==button.id? ' active': '' }`}
                   key={button.id} onClick={() => toggleTab(button.id)}>
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
                <div className="shipment-info">
                  <div className="info-row" style={{'justifyContent':'space-between',color:'#404040'}}>
                    <div>
                      <span className='info-label'>Carrier: </span>
                      <span className='info-value clamp-ellipse'>{selectedRow.carrier.name}</span>
                    </div>
                    <div>
                      <span className='info-label'>Total Distance: </span>
                      <span className='info-value'>{selectedRow.carrier.totalDistance} mi</span>
                    </div>
                  </div>
                  <div className="info-row">
                    <div className='info-row-item'>
                      <span className='tag wt'>Total Wt. </span>
                      {selectedRow.carrier.totalWeight} lbs
                    </div>
                    <div className='info-row-item'>
                      <span className='tag wt'>Total Vol. </span>
                      {selectedRow.carrier.totalVolume} cft
                    </div>
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
                      <div className='shipment-timeline-wrapper'>
                        <div>
                          <img src={`/assets/${stop.type}-arrow.svg`}/>
                        </div>
                        <div>
                          <div className='shipment-title clamp-ellipse'>{stop.name}</div>
                          <div className='shipment-description clamp-ellipse'>{stop.address}</div>
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
                      <div className={`timeline-info ${timelineExpand?'':'info-hidden'}`}>
                          <div className="info-row">
                            <div className='row-item-units'>
                              <span className='tag wt'>Wt. </span>
                                {stop.details.weight}
                                <span className="units">lbs</span>
                            </div>
                            <div className='row-item-units'>
                              <span className='tag wt'>Vol. </span>{stop.details.volume} 
                              <span className='units'>cft</span>
                            </div>
                          </div>
                          <div className="info-row">
                            <div className='row-item-units'>
                              <span className='tag qty'>
                                Qty.
                              </span>
                              {stop.details.quantity}
                              <span className="units">pcs.</span>
                            </div>
                            <div className='row-item-units'>
                              <span className="tag qty">Plt.</span> {stop.details.pallets}
                            </div>
                          </div>
                        </div>
                      </div>
                  </>
                ))}
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
