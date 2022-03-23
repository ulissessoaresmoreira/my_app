import React from 'react'
import {useState} from 'react'


import Snackbar from '@mui/material/Snackbar'

import MuiAlert from '@mui/material/Alert'

const Toasty = ({open, text, severity, onClose}) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') { // QUANDO CLICAR FORA ELE NÃO VAI FECHAR, MAS VAI RETORNAR, PARA FECHAR VAI PRECISAR CLICAR NUM PONTO ESPECÍFICO
            return
        }

    onClose()
  }



return (
    <>      
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <MuiAlert elevation={6} variant="filled" severity={severity}>
                {text}
            </MuiAlert>
        
        </Snackbar>
    </>
)
}


export default Toasty
