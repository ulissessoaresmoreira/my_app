import React from 'react'

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,    
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import useStyles from './Header.style'
//import { ClassNames } from '@emotion/react'


const Header = () => {
    const classes = useStyles()

    return (
        
        <AppBar position="static">
            <Toolbar className={classes.title}>
                
            <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" color="secondary" size="large" sx={{ flexGrow: 1 }}>
                My App
            </Typography>                                  
            <Button color="primary" size="large">Login</Button>
            </Toolbar>
        </AppBar>
        
    
    )
}


export default Header