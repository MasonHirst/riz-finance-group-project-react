import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'

import DashBoard from './screens/DashBoard'
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='dashboard' element={<DashBoard />} />
        <Route path='login' element={<LoginScreen />} />
        
        <Route path='*' element={<Navigate to="dashboard" />} />
      </Routes>
    </div>
  )
}

export default App

