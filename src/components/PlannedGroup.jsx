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
      <div className={`table-wrapper ${isSideTabOpen ? 'active' : ''}`}>
        <table className="table">
          <thead>
            <tr>
              <th style={{width:'4%'}}>
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                />
              </th>
              <th style={{width:'4%'}}>S.NO.</th>
              <th style={{width:'20%'}}>ORIGIN</th>
              <th style={{width:'13%'}}>DESTINATION</th>
              {!isSideTabOpen && <th style={{width:'1%'}}></th>}
              <th style={{width:'13%'}}>CARRIER | TYPE</th>
              <th style={{width:'12%'}}>MAX UTILIZATION | VEHICLE</th>
              {!isSideTabOpen &&<th style={{width:'1%'}}></th>}
              {!isSideTabOpen && <th style={{width:'14%'}}>TOTAL | WEIGHT | QUANTITY</th>}
              <th style={{width:'14%'}}>
                <div className='flex-end'>
                  <img src=''/>
                </div>
              </th>
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
                <td>
                  <div style={{display: 'flex','justify-content': 'space-between'}}>
                    <div className='row-item'>
                      <div className='row-item-primary'>
                        {row.origin?.city}
                      </div>
                      <div className='row-item-secondary'>
                        {row.origin?.state}
                      </div>
                    </div>
                    {!isSideTabOpen && 
                      <div className='pick-drop'>
                        <div className='flex pick-drop-icons'>
                          {row.stops.pickup.hasdocks ? 
                            <div className='tag docx-bg'>x-docx</div>
                          :<div className='red-45'></div>}
                          <div className='horizontal-line-dotted'></div>
                          {row.stops.drop.hasdocks ? 
                            <div className='tag docx-bg'>x-docx</div>
                          :<div className='green-45'></div>}
                        </div>
                        <div className='flex'>
                          <div className='tag stop-bg'>{row.stops.pickup.count + ' pickup(s)'}</div>
                          <div className='tag stop-bg'>{row.stops.drop.count + ' drop(s)'}</div>
                        </div>
                      </div>
                    }
                  </div>
                </td>
                <td>
                  <div className='row-item'>
                    <div className='row-item-primary'>
                      {row.destination?.city}
                    </div>
                    <div className='row-item-secondary'>
                      {row.destination?.state}
                    </div>
                  </div>
                </td>
                {!isSideTabOpen && <td>
                  <div className='table-divider'></div>
                </td>}
                <td>
                  <div className='row-item'>
                    <div className='row-item-primary'>
                      {row.carrier?.name}
                    </div>
                    <div className='row-item-secondary'>
                      {row.carrier?.type}
                    </div>
                  </div>
                </td>
                <td>
                  <div className='row-item'>
                    <div className='row-item-semi-bold'>
                      {row.utilization?.percentage+ ' %'}
                      <div className='progress-bar'>
                        <div className={`progress ${
                    row.utilization?.type == 'Vol'? ' vol':'wt'}`}
                    style={{width:`${row.utilization?.percentage}%`}}></div>
                      </div>
                      <div className={`tag ${row.utilization?.type == 'Vol'?'vol':'wt'}`}>{row.utilization?.type}</div>
                    </div>
                    <div className='row-item-secondary'>
                      {row.utilization?.vehicle}
                    </div>
                  </div>
                </td>
                {!isSideTabOpen && <td>
                  <div className='table-divider'></div>
                </td>
                }
                {!isSideTabOpen &&  <td>
                  <div className='row-item'>
                    <div className='row-item-unit-wrapper'>
                      <div className='row-item-units'>
                        {row.total?.weight}
                        <span className='units'>
                          {row.total?.weightUnit}
                        </span>
                      </div>
                      <div className='row-item-units'>
                        {row.total?.quantity}
                        <div className='units'>
                          {row.total?.quantityUnit}
                        </div>
                      </div>
                    </div>
                    <div className='row-item-unit-wrapper'>
                      <div className='row-item-units'>
                      <span className='tag'>orders: </span>{row.total?.orders}
                      </div>
                      <div className='row-item-units'>
                        <span className='tag'>
                          pallets: 
                        </span>
                        {row.total?.pallets}
                      </div>
                    </div>
                  </div>
                </td>}
                <td>
                  <div className='flex-end'>
                    <button>
                      <img className='load-icon' src='assets/start-loading.png'/>
                      <div className='hash-icon'>#</div>
                      {!isSideTabOpen && <span>MATERIALS</span>}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
                      <div className='shipment-timeline-wrapper'>
                        <div>
                          <img src={`/assets/${stop.type}-arrow.svg`}/>
                        </div>
                        <div>
                          <div className='.shipment-title'>{stop.name}</div>
                          <div className='shipment-description'>{stop.address}</div>
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
