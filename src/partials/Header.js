import React from 'react'

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,    
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

const Header = () => {
    

    return (
        
        <AppBar position="static">
            <Toolbar>
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
            <Button color="secondary" size="large">Login</Button>
            </Toolbar>
        </AppBar>
        
    
    )
}


export default Header