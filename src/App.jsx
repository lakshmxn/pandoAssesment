import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import PlannedGroupPanel from "./components/PlannedGroupPanel"

const App =()=> {
  return (
    <BrowserRouter>
      <div className="panel">
        <Header />
        <Routes>
          <Route path="/" element={<PlannedGroupPanel/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App