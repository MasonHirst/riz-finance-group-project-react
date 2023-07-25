import React from 'react'
import LoggedOutHeader from '../components/auth-components/LoggedOutHeader'
import SignupEmail from '../components/auth-components/SignupEmail'

const SignupScreen = () => {
  
  return (
    <div>
      <LoggedOutHeader />
      <SignupEmail />
    </div>
  )
}

export default SignupScreen