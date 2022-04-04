import React from 'react'
import ReactDOM from 'react-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import App from './App'
import './index.css'

import {
  blue,
  yellow,
} 
from '@mui/material/colors/'

import {AuthProvider} from './state/Auth'

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: yellow[400],
    },
    },
      margin:{
        spacing: 1,
    },  
})


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)


