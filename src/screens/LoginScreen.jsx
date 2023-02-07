import React from 'react'
import LoggedOutHeader from '../components/auth-components/LoggedOutHeader'
import LoginForm from '../components/auth-components/LoginForm'

const LoginScreen = () => {
  return (
    <div>
      <LoggedOutHeader />
      <LoginForm />
    </div>
  )
}

export default LoginScreen
