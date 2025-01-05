import { useState } from "react";
import '../styles/sideNav.css'
const SideNav = ()=>{

  const [activeKey, setActiveKey] = useState('material-full');

  const navItems = [
    { key: 'ai', icon: 'ai.png','priorityColor':'sucess'},
    { key: 'material-full',icon: 'material-full.png','priorityColor':'sucess'},
    { key: 'rejections',icon: 'rejections.png','priorityColor':'rejected'},
  ];

  return(
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
          <div className={`blinking-dot ${item.priorityColor}`}></div>
          }
        </div>
      ))}
    </aside>
  )
}

export default SideNav