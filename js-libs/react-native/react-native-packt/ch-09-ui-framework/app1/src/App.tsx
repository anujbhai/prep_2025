import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import LayoutGrids from './layouts/layout-grids'

function App() {
  return (
    <>
      <Router>
        <LayoutGrids />
      </Router>
    </>
  )
}

export default App
