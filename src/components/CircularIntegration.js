import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { green } from '@mui/material/colors'
import Button from '@mui/material/Button'


const CircularIntegration = ({onClick}) => {
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const timer = React.useRef()

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  }

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  const handleRegisterButton = () => {
    if (!loading) {
      setSuccess(false)
      setLoading(true)
      timer.current = window.setTimeout(() => {
        setSuccess(true)
        setLoading(false)
      }, 1000)
    }
  }

    return (        
        <Button
            variant="contained"
            sx={buttonSx}
            disabled={loading}          
            onClick={handleRegisterButton}
        >
        Cadastrar
        {loading && (
            <CircularProgress
            size={24}
            sx={{
                color: green[500],
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
            }}
            />
        )}
        </Button>
    )
}

export default CircularIntegration