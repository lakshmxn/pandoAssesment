import React, { useState } from 'react';

const PlannedGroup = () => {
  const [isSideTabOpen, setIsSideTabOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);


  const tableData = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
  ];

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setIsSideTabOpen(true);
  };

  const handleCloseSideTab = () => {
    setIsSideTabOpen(false);
    setSelectedRow(null);
  };

  return (
      <main className="main-content">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id} onClick={() => handleRowClick(row)}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={isSideTabOpen ? 'side-tab active' : 'side-tab'}>
          {isSideTabOpen && (
            <>
              <button className="close-btn" onClick={handleCloseSideTab}>
                ❌
              </button>
              <div className="side-tab-content">
                <h3>Details</h3>
                <p><strong>Name:</strong> {selectedRow?.name}</p>
                <p><strong>Age:</strong> {selectedRow?.age}</p>
              </div>
            </>
          )}
        </div>      
      </main>
  );
};

export default PlannedGroup;
