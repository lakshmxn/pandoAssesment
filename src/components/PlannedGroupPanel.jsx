import TopAppBar from "./TopAppBar"
import Filter from "./Filter"
import PlannedGroup from "./PlannedGroup"
import SideNav from "./SideNav"

const PlannedGroupPanel = ()=> {
  return (
    <div className="container">
      <TopAppBar />
      <Filter />
      <div className="plan-container">
        <SideNav/>
        <PlannedGroup/>
      </div>
    </div>
  )
}

export default PlannedGroupPanel