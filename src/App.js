import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'

import DashBoard from './screens/DashBoard'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='dashboard' element={<DashBoard />} />
        <Route path='login' element={<LoginScreen />} />
        <Route path='signup' element={<SignupScreen />} />
        
        <Route path='*' element={<Navigate to="signup" />} />
      </Routes>
    </div>
  )
}

export default App

