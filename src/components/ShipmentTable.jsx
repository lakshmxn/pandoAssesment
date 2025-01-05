import React from 'react';
import SortColumnHead from './SortColumnHead';
import '../styles/shipmentTable.css'

const ShipmentTable = ({ 
  tableData, 
  isSideTabOpen, 
  selectedRow,
  selectedRows, 
  isAllSelected,
  onRowClick,
  onSelectRow,
  onSelectAll 
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th style={{width:'4%'}}>
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={onSelectAll}
              aria-label="Select all rows"
            />
          </th>
          <th style={{width:'4%'}}>S.NO.</th>
          <th style={{width:'13%'}}>
            <SortColumnHead label="ORIGIN" />
          </th>
          <th style={{width:'13%'}}>
            <SortColumnHead label="DESTINATION" />
          </th>
          {!isSideTabOpen && <th className="column-spacer"></th>}
          <th style={{width:'13%'}}>CARRIER | TYPE</th>
          <th style={{width:'13%'}}>MAX UTILIZATION | VEHICLE</th>
          {!isSideTabOpen && <th className="column-spacer"></th>}
          {!isSideTabOpen && (
            <th style={{width:'14%'}}>
              <SortColumnHead label="TOTAL | WEIGHT | QUANTITY" />
            </th>
          )}
          <th style={{width:'14%'}}>
            <div className="flex-end">
              <img src="assets/column-selector.svg" alt="column selector" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr 
            className={row.id === selectedRow?.id ? 'active-row' : ''} 
            key={row.id} 
            onClick={() => onRowClick(row)}
          >
            <td>
              <div className='table-checkbox'>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.id)}
                  onClick={(e) => onSelectRow(row.id, e)}
                />
                <img src='/assets/Truck.png'/>
              </div>
            </td>
            <td>{row.id}</td>
            <td>
              <div style={{display: 'flex', 'justify-content': 'space-between'}}>
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
                      : <div className='red-45'></div>}
                      <div className='horizontal-line-dotted'></div>
                      {row.stops.drop.hasdocks ? 
                        <div className='tag docx-bg'>x-docx</div>
                      : <div className='green-45'></div>}
                    </div>
                    <div className='flex' style={{gap:'4px'}}>
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
                  {row.utilization?.percentage + ' %'}
                  <div className='progress-bar'>
                    <div 
                      className={`progress ${row.utilization?.type === 'Vol' ? ' vol' : 'wt'}`}
                      style={{width: `${row.utilization?.percentage}%`}}
                    ></div>
                  </div>
                  <div className={`tag ${row.utilization?.type === 'Vol' ? 'vol' : 'wt'}`}>
                    {row.utilization?.type}
                  </div>
                </div>
                <div className='row-item-secondary'>
                  {row.utilization?.vehicle}
                </div>
              </div>
            </td>
            {!isSideTabOpen && <td>
              <div className='table-divider'></div>
            </td>}
            {!isSideTabOpen && <td>
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
                    <span className='tag'>pallets: </span>{row.total?.pallets}
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
  );
};

export default ShipmentTable;