import React from 'react'
import {useState} from 'react'

import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,        
} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'; 

import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import InfoIcon from '@mui/icons-material/Info'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'
import AnimationIcon from '@mui/icons-material/Animation'
import PsychologyIcon from '@mui/icons-material/Psychology'

import useStyles from './Header.style'

import { useHistory } from "react-router-dom"


const Header = ({ user }) => {   // ENVIAR PARA O HEADER SE O USUÁRIO ESTÁ LOGADO (LOGGED) OU NÃO E O EMAIL PARA APARECER QUANDO ESTIVER LOGADO. SE ESTIVER LOGADO VAI APARECER O EMAIL AO INVÉS DE LOGIN E A FOTO, CASO A API RETORNE ISSO. IMPORTAR O USEAUTH NO DEFAULT, POIS É QUEM USA O HEADER E O DEFAULT PRECISA ENXERGAR O STATE ATRAVÉS DO HOOK USEAUTH
    const classes = useStyles()
    const history = useHistory()

    

const [menuOpen, setMenuOpen] = useState(false)

const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
}

const handleMenuClick = route => {
    handleToggleMenu()
    history.push(route)
}

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.title}>                    
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => handleToggleMenu()}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" color="secondary" size="large" sx={{ flexGrow: 1 }}>
                        My App
                    </Typography>                                  
                    {
                        user.logged 
                        ? <Typography variant="h6" component="div" color="secondary" size="large" sx={{ flexGrow: 1 }}> {user.email} </Typography>
                        : <Button color="secondary" size="large">Login</Button>
                    }
                </Toolbar>
            </AppBar>
            <Drawer open={menuOpen} onClose={handleToggleMenu}>
                <List>
                    <ListItem button onClick={() => {handleMenuClick('/login')}}>
                        <ListItemIcon><LoginIcon /></ListItemIcon>
                        <ListItemText>Login</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => {handleMenuClick('/')}}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => {handleMenuClick('/customers')}}>
                        <ListItemIcon><GroupAddIcon /></ListItemIcon>
                        <ListItemText>Listagem de Clientes</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => {handleMenuClick('/customers/add')}}>
                        <ListItemIcon><GroupAddIcon /></ListItemIcon>
                        <ListItemText>Cadastro de Clientes</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => {handleMenuClick('/customers/edit')}}>
                        <ListItemIcon><GroupAddIcon /></ListItemIcon>
                        <ListItemText>Editar Cliente</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => {handleMenuClick('/rickmorty')}}>
                        <ListItemIcon><AnimationIcon /></ListItemIcon>
                        <ListItemText>Rick and Morty</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => {handleMenuClick('/marvel')}}>
                        <ListItemIcon><TheaterComedyIcon /></ListItemIcon>
                        <ListItemText>Personagens Marvel</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => {handleMenuClick('/advice')}}>
                        <ListItemIcon><PsychologyIcon /></ListItemIcon>
                        <ListItemText>Frase do dia</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><InfoIcon /></ListItemIcon>
                        <ListItemText>Sobre</ListItemText>
                    </ListItem>                    
                </List>
            </Drawer>
        </>
    )
}


export default Header