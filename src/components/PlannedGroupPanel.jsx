import TopAppBar from "./TopAppBar"
import Filter from "./Filter"
import PlannedGroup from "./PlannedGroup"
import { useState } from "react";

const PlannedGroupPanel = ()=> {

  const [activeKey, setActiveKey] = useState('material-full');

  const navItems = [
    { key: 'ai', icon: 'ai.png' },
    { key: 'material-full',icon: 'material-full.png' },
    { key: 'rejections',icon: 'rejections.png' },
  ];
  return (
    <div className="container">
      <TopAppBar />
      <Filter />
      <div className="plan-container">
        <aside className="sidenav">
          {navItems.map((item) => (
            <div
              key={item.key}
              className={`icon ${activeKey === item.key ? 'active' : ''}`}
              onClick={() => setActiveKey(item.key)}
            >
              <img src={`/assets/${item.icon}`}/>
              {
               activeKey != item.key && 
              <div className='blinking-dot'></div>
              }
            </div>
          ))}
        </aside>
        <PlannedGroup/>
      </div>
    </div>
  )
}

export default PlannedGroupPanel