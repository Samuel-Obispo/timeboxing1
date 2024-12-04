
import { Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"
import Login from './pages/login'
import { Dashboard } from './pages/Dashboard'

function App() {

  return (
    <Routes>
      <Route path="/" element=<Login/> />
      <Route path="/dashboard" element=<Dashboard/> />
    </Routes>
  )
}

export default App
