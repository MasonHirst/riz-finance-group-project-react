import { useRef, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'
import { AuthModal } from '../../reusable-styles/AuthModal'

function LoginForm() {
  const inputRef = useRef()
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  return (
    <AuthModal>
      <Typography variant="h5">Welcome</Typography>

      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 15,
          position: 'relative',
        }}
      >
        <TextField
          inputProps={{
            ref: inputRef,
          }}
          autoFocus
          variant="outlined"
          label="Email address"
          fullWidth
        />
        {error ? (
          <Typography
            variant="subtitle2"
            style={{ color: 'red', marginLeft: '15px' }}
          >
            {error}
          </Typography>
        ) : (
          ''
        )}
        <Button
          size="large"
          type="submit"
          variant="contained"
          fullWidth
          style={{
            padding: '15px',
            boxShadow: 'none',
            fontSize: '18px',
            textTransform: 'none',
          }}
        >
          Continue
        </Button>
      </form>

      <div style={{ width: '100%' }}>
        <Typography align="left" variant="body2">
          Don't have an account?{' '}
          <Link href="signup" underline="none" style={{ fontWeight: '600' }}>
            Sign up
          </Link>
        </Typography>
      </div>
    </AuthModal>
  )
}

export default LoginForm
